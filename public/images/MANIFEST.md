# Image Manifest

## Source materials
- `GED Curriculum Specifications.pdf` (40 pages)
- `GED Test Prep 2022/2023 by Caren Van Slyke` (1641 pages)

## Image strategy
Source PDFs were a curriculum spec and a 1,641-page commercial test-prep textbook.
After review, we elected **NOT to bulk-extract embedded raster images** because:

1. The textbook's diagrams are largely small icons, page-decoration, layout glyphs,
   and proprietary stylized illustrations that would not translate cleanly into
   a study-card UI.
2. Custom **inline SVG diagrams** — built directly into each chapter — yield
   higher fidelity, are themable, scale crisply on every device, and avoid any
   copyright concerns around redistributing textbook page renderings.
3. Mathematical formulas, geometric figures, coordinate planes, and scientific
   diagrams render best as code, not bitmaps.

All visuals in the dashboard are therefore originals authored as part of the
chapter content, and there are no extracted source images to log.
