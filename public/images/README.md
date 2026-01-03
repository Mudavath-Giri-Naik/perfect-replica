# Images Folder

Add your images here for the image slider.

## Instructions

1. Add your image files to this folder (`public/images/`)
2. Update the `images` array in `src/components/ImageSliderSection.tsx` with your image file names
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## Example

If you add `photo1.jpg`, `photo2.jpg`, and `photo3.png` to this folder, update the array like this:

```typescript
const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.png",
];
```

The slider will automatically display each image for 2 seconds before transitioning to the next one.

