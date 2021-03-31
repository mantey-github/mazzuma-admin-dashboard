const size = {
  smallMobile: '575.98px',
  mobile: '576px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
}

export const device = {
  // Extra small devices (portrait phones, less than 576px)
  smallMobile: `(max-width: 575.98px)`,

  // Small devices (landscape phones, 576px and up)
  mobile: `(min-width: 576px) and (max-width: 767.98px)`,

  // Medium devices (tablets, 768px and up)
  tablet: `(min-width: 768px) and (max-width: 991.98px)`,

  // Large devices (desktops, 992px and up)
  laptop: `(min-width: 992px) and (max-width: 1199.98px)`,

  // Extra large devices (large desktops, 1200px and up)
  desktop: `(max-width: ${size.desktop})`,
}
