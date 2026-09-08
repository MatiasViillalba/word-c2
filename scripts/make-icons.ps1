<#
.SYNOPSIS
    Generates the PNG icon set for the PWA.

.DESCRIPTION
    iOS will not use an SVG for a home-screen icon and handles transparency
    poorly: a touch icon with an alpha channel is composited onto black, which
    ruins any soft edge. Everything produced here is therefore fully opaque and
    painted at the exact sizes the manifest declares.

    Four files are written:
      icon-192.png          manifest icon, small
      icon-512.png          manifest icon, large
      maskable-512.png      extra safe area so Android can crop it to any shape
      apple-touch-icon.png  180x180, the only size iOS actually reads

.EXAMPLE
    pwsh -File scripts/make-icons.ps1
#>

[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Definition)
$iconDir  = Join-Path $repoRoot 'icons'
if (-not (Test-Path $iconDir)) { New-Item -ItemType Directory -Path $iconDir | Out-Null }

# Cobalt palette, kept in step with assets/css/tokens.css
$ink    = [System.Drawing.Color]::FromArgb(255, 4, 6, 11)
$azureA = [System.Drawing.Color]::FromArgb(255, 98, 166, 255)
$azureB = [System.Drawing.Color]::FromArgb(255, 11, 79, 208)

function New-Icon {
    param(
        [int]    $Size,
        [string] $Path,
        [double] $Inset = 0.0    # fraction of the canvas left empty around the mark
    )

    $bmp = New-Object System.Drawing.Bitmap($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppRgb)
    $g   = [System.Drawing.Graphics]::FromImage($bmp)
    try {
        $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
        $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

        # Opaque ground first: nothing here is ever allowed to be transparent.
        $g.Clear($ink)

        $pad  = [int]([math]::Round($Size * $Inset))
        $side = $Size - (2 * $pad)
        $rect = New-Object System.Drawing.Rectangle($pad, $pad, $side, $side)

        # Rounded square filled with the brand gradient.
        # Named $shape, not $path: PowerShell is case-insensitive, so $path
        # would silently resolve to the -Path string parameter above.
        $radius = [int]([math]::Round($side * 0.235))
        $shape  = New-Object System.Drawing.Drawing2D.GraphicsPath
        $d      = $radius * 2
        $shape.AddArc($rect.X, $rect.Y, $d, $d, 180, 90)
        $shape.AddArc($rect.Right - $d, $rect.Y, $d, $d, 270, 90)
        $shape.AddArc($rect.Right - $d, $rect.Bottom - $d, $d, $d, 0, 90)
        $shape.AddArc($rect.X, $rect.Bottom - $d, $d, $d, 90, 90)
        $shape.CloseFigure()

        $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
            (New-Object System.Drawing.Point($rect.X, $rect.Y)),
            (New-Object System.Drawing.Point($rect.Right, $rect.Bottom)),
            $azureA, $azureB)
        $g.FillPath($brush, $shape)

        # The mark: a capital W, with a small 2 riding on its shoulder.
        $wSize = [float]($side * 0.52)
        $fontW = New-Object System.Drawing.Font('Segoe UI', $wSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
        $fmt   = New-Object System.Drawing.StringFormat
        $fmt.Alignment     = [System.Drawing.StringAlignment]::Center
        $fmt.LineAlignment = [System.Drawing.StringAlignment]::Center
        $white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)

        $wRect = New-Object System.Drawing.RectangleF(
            [float]($rect.X - $side * 0.045), [float]($rect.Y - $side * 0.015),
            [float]$side, [float]$side)
        $g.DrawString('W', $fontW, $white, $wRect, $fmt)

        $twoSize = [float]($side * 0.26)
        $fontTwo = New-Object System.Drawing.Font('Segoe UI', $twoSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
        $twoRect = New-Object System.Drawing.RectangleF(
            [float]($rect.X + $side * 0.30), [float]($rect.Y + $side * 0.14),
            [float]$side, [float]$side)
        $g.DrawString('2', $fontTwo, $white, $twoRect, $fmt)

        $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Host ("  wrote {0} ({1}x{1})" -f (Split-Path -Leaf $Path), $Size)

        $white.Dispose(); $fontW.Dispose(); $fontTwo.Dispose()
        $fmt.Dispose(); $brush.Dispose(); $shape.Dispose()
    }
    finally {
        $g.Dispose()
        $bmp.Dispose()
    }
}

Write-Host 'Generating icons...'
New-Icon -Size 192 -Path (Join-Path $iconDir 'icon-192.png')         -Inset 0.06
New-Icon -Size 512 -Path (Join-Path $iconDir 'icon-512.png')         -Inset 0.06
# Android crops maskable icons to a circle or squircle, so the mark needs room.
New-Icon -Size 512 -Path (Join-Path $iconDir 'maskable-512.png')     -Inset 0.19
New-Icon -Size 180 -Path (Join-Path $iconDir 'apple-touch-icon.png') -Inset 0.00
Write-Host 'Done.'
