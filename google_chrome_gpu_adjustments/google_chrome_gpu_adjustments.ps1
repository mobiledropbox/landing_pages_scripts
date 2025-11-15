# google_chrome_gpu_adjustments.ps1
# google_chrome_gpu_adjustments.mp4 downloader via PowerShell
# Para lang ito sa mga gusto pahirapan ang sarili na magpa-andar pa ng script na tulad kong pogi.
# Ron Penones | November 15th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

Write-Host "️ Download ko lang iyong bes bes wait lang ha?" -ForegroundColor Cyan
# Iyong videoUrl sa baba po ang nilalapatan kung saan po magmumula ang source file.
$videoUrl = "https://aeronjegithubdownloads.vercel.app/api/download?url=https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2F13phm3qwq57bogdpfv609%2Fgoogle_chrome_gpu_adjustments.mp4%3Frlkey%3Ddrsbqosqwaqitqkndyn2q496w%26st%3Dq4kezjtv%26dl%3D1&filename=google_chrome_gpu_adjustments.mp4"

Write-Host "️ Malapit na wait ka lang tang ina chix yarn?" -ForegroundColor Cyan
$outputFile = "google_chrome_gpu_adjustments.mp4" # Dito po ilalapat kung ano magiging fileName.

# Kung saan po pinatakbo ang shell script ay doon po masi-save ang outputFile.
Write-Host " Ok downloaded na bes at naka-saved siya kung saan mo pinatakbo ang script na ito." -ForegroundColor Green
Invoke-WebRequest -Uri $videoUrl -OutFile $outputFile
