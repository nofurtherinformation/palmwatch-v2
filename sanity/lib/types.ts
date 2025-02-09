export type AboutPageContent = {
  content: Array<any>
  faq: Array<{
    heading: string,
    body: Array<any>
  }>,
  contributors: Array<any>
}
export type ContactPageContent = {
  content: Array<any>
}

export type HomePageContent = {
  title: string,
  heroTitle: string,
  heroSubtitle: string,
  introContent: Array<any>,
  useCases: Array<{
    title: string,
    body: Array<any>,
    image: {
      asset: {
        url: string
      }
    }
  }>,
  mapDescription: Array<any>
}