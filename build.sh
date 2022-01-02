#!/usr/bin/env bash

set -Eeuo pipefail

yum install -y wget
amazon-linux-extras install -y python3.8

bash ./download-sheets.sh

pip3.8 install -r ./requirements.txt
python3.8 ./build-static-data.py
