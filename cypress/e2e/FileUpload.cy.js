import 'cypress-file-upload';

describe("File Uploads", ()=>{
    it("Single File Upload", ()=>{
        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile('test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it("File Upload - Rename", ()=>{
        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:'test1.pdf', fileName:'myfile.pdf'});

        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it("File Upload - Drag and Drop", ()=>{
         cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get('#drag-drop-upload').attachFile("test1.pdf", {subjectType:'drag-n-drop'});
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("test1.pdf")
    })
    it("Multiple File Upload ", ()=>{
         cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
         cy.get('#fileToUpload').attachFile(["test1.pdf", "test2.pdf"])
         cy.wait(5000)
         cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')
})
    it.only("File Upload- Shadow Dom ", ()=>{
         cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
         cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("test1.pdf")
         cy.wait(5000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test1.pdf')


})
})