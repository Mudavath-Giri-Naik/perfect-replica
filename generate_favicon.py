import base64

# Read the image file
with open('public/naik.jpeg', 'rb') as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

# Create the SVG content with base64 embedded image
svg_content = f'''<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleView">
      <circle cx="32" cy="32" r="32" />
    </clipPath>
  </defs>
  <image 
    width="64" 
    height="64" 
    href="data:image/jpeg;base64,{encoded_string}" 
    clip-path="url(#circleView)"
  />
</svg>'''

# Write the SVG file
with open('public/favicon.svg', 'w') as svg_file:
    svg_file.write(svg_content)

print("Successfully created public/favicon.svg with embedded base64 image")
