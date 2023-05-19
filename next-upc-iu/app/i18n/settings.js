export const fallbackLng = 'ca'
export const languages = [fallbackLng, 'en', 'es']
export const defaultNS = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
    return {
      // debug: true,
      supportedLngs: languages,
      fallbackLng,
      lng,
      fallbackNS: defaultNS,
      defaultNS,
      ns
    }
  }