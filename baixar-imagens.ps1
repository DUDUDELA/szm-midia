# Baixa as imagens públicas do site da SZM para a pasta img/
# Como usar: abra o terminal do VS Code na pasta do projeto e rode:
#   powershell -ExecutionPolicy Bypass -File .\baixar-imagens.ps1

$img = Join-Path $PSScriptRoot "img"
New-Item -ItemType Directory -Force -Path $img | Out-Null

$arquivos = @{
  "szm-logo.png" = "https://szmmidia-com-br.lovable.app/__l5e/assets-v1/bdfcc08a-516c-4b10-b05a-dc14441704e6/szm-logo.png"
  "szm-ceo.jpg"  = "https://szmmidia-com-br.lovable.app/__l5e/assets-v1/ae8b2d23-76b7-4675-9b75-30bbaf74468a/szm-ceo.jpg"
  "hero-szm.jpg" = "https://szmmidia-com-br.lovable.app/assets/hero-szm-B70OTLDh.jpg"
}

foreach ($nome in $arquivos.Keys) {
  $destino = Join-Path $img $nome
  Write-Host "Baixando $nome ..."
  Invoke-WebRequest -Uri $arquivos[$nome] -OutFile $destino
}

Write-Host ""
Write-Host "Pronto! Imagens salvas em img/. Abra o index.html para conferir."
