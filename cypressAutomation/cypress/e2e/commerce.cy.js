describe("commerce",()=>{
    it('should search for an item, select it, and add to cart',()=>{
        cy.visit("https://commercejs-demo-store.netlify.app/")
        cy.get('.swiper-slide-active > .hero-slide > .d-flex').click()
    })
})
