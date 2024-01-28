import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'

export const locales = ['en', 'cs'] as const
export const localePrefix = 'always' // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/blog': '/blog',

  // If locales use different paths, you can
  // specify each external path per locale.
  '/about': {
    en: '/about',
    cs: '/o-nas'
  },

  '/contact': {
    en: '/contact',
    cs: '/kontakt'
  },

  '/product': {
    en: '/product',
    cs: '/produkt'
  },

  '/service': {
    en: '/service',
    cs: '/sluzby'
  }

  /*   // Dynamic params are supported via square brackets
  "/news/[articleSlug]-[articleId]": {
    en: "/news/[articleSlug]-[articleId]",
    cz: "/neuigkeiten/[articleSlug]-[articleId]",
  }, */

  /*   // Also (optional) catch-all segments are supported
  "/categories/[...slug]": {
    en: "/categories/[...slug]",
    cz: "/kategorien/[...slug]",
  }, */
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
