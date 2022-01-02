#!/usr/bin/env bash

set -Eeuo pipefail

wget --output-document=2020-data.csv 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTmev0k19hbcpS3ApSf87xdXy6wz1fZiOGlB2sTEusRw2-lFJ273_NzYKzzPQ9hTnAOYnrOoPLau1KE/pub?gid=478721577&single=true&output=csv'
wget --output-document=restaurant.csv 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTmev0k19hbcpS3ApSf87xdXy6wz1fZiOGlB2sTEusRw2-lFJ273_NzYKzzPQ9hTnAOYnrOoPLau1KE/pub?gid=2015788390&single=true&output=csv'

