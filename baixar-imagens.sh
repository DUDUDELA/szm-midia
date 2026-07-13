#!/usr/bin/env bash
# Baixa as imagens públicas do site da SZM para a pasta img/
# Como usar: no terminal do VS Code, na pasta do projeto:
#   bash baixar-imagens.sh

cd "$(dirname "$0")"
mkdir -p img

echo "Baixando szm-logo.png ..."
curl -L -o img/szm-logo.png "https://szmmidia-com-br.lovable.app/__l5e/assets-v1/bdfcc08a-516c-4b10-b05a-dc14441704e6/szm-logo.png"

echo "Baixando szm-ceo.jpg ..."
curl -L -o img/szm-ceo.jpg "https://szmmidia-com-br.lovable.app/__l5e/assets-v1/ae8b2d23-76b7-4675-9b75-30bbaf74468a/szm-ceo.jpg"

echo "Baixando hero-szm.jpg ..."
curl -L -o img/hero-szm.jpg "https://szmmidia-com-br.lovable.app/assets/hero-szm-B70OTLDh.jpg"

echo ""
echo "Pronto! Imagens salvas em img/. Abra o index.html para conferir."
