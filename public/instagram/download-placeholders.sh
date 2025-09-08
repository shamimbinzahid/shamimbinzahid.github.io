#!/bin/bash

# Script to download placeholder images for Instagram bento grid
# This is a temporary solution until you add your own Instagram photos

echo "Downloading placeholder images for Instagram bento grid..."

# Create the directory if it doesn't exist
mkdir -p $(dirname "$0")

# Download 12 placeholder images with different themes
curl -s "https://source.unsplash.com/random/800x800/?travel" -o "$(dirname "$0")/photo1.jpg"
curl -s "https://source.unsplash.com/random/800x800/?tech" -o "$(dirname "$0")/photo2.jpg"
curl -s "https://source.unsplash.com/random/800x800/?lifestyle" -o "$(dirname "$0")/photo3.jpg"
curl -s "https://source.unsplash.com/random/800x800/?urban" -o "$(dirname "$0")/photo4.jpg"
curl -s "https://source.unsplash.com/random/800x800/?food" -o "$(dirname "$0")/photo5.jpg"
curl -s "https://source.unsplash.com/random/800x800/?coding" -o "$(dirname "$0")/photo6.jpg"
curl -s "https://source.unsplash.com/random/800x800/?design" -o "$(dirname "$0")/photo7.jpg"
curl -s "https://source.unsplash.com/random/800x800/?nature" -o "$(dirname "$0")/photo8.jpg"
curl -s "https://source.unsplash.com/random/800x800/?city" -o "$(dirname "$0")/photo9.jpg"
curl -s "https://source.unsplash.com/random/800x800/?workspace" -o "$(dirname "$0")/photo10.jpg"
curl -s "https://source.unsplash.com/random/800x800/?art" -o "$(dirname "$0")/photo11.jpg"
curl -s "https://source.unsplash.com/random/800x800/?programming" -o "$(dirname "$0")/photo12.jpg"

echo "Downloaded 12 placeholder images. Replace them with your actual Instagram photos."
