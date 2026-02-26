# Assets Structure

This project keeps files under `src/assets` grouped by use-case.

## Folder Map

```text
src/assets/
  branding/                 # logos and brand identity files
  people/                   # team/member photos
  videos/                   # local mp4 files
  foundation/               # shared section graphics (foundation/community/growth)
  galleries/
    about/                  # about page gallery images
    b2b/                    # b2b gallery images
    education/              # education gallery images
    sports/                 # sports gallery images
    realestate/             # real-estate gallery images
  services/
    content/                # service media (posters, production, martech, etc.)
    social/                 # social platform images/icons for services
  mascot/                   # mascot images and variants
  icons/                    # standalone icon-like image assets
  hiring/                   # hiring campaign creatives
  industries/               # industry images
  blogImages/               # blog post images
  logos/                    # partner/client logo strip images
  mockup/                   # web/app mockups
  stackingCardsAnimation/   # heavy lottie JSON files
  Edu-marketing/            # education-marketing specific media
```

## Naming Rules

- Use lowercase + kebab-case for new files.
- Avoid spaces in filenames.
- Prefer descriptive names: `events-video-1.mp4`, `social-media.png`.
- Keep page-specific media in the corresponding folder above.

## Import Style

- Use alias imports from `@/assets/...`.
- Example:

```ts
import heroVideo from "@/assets/videos/events-video-1.mp4";
import authorPhoto from "@/assets/people/akmal.jpeg";
import serviceImage from "@/assets/services/content/poster_1.png";
```

## Notes

- If you move or rename an asset, update all imports immediately.
- Run `npm run build` after asset changes to catch broken references.
