cd content
for dir in */; do
    cd $dir
    # génère les corrections
    pandoc index.emd --from markdown --o correction.pdf
    pandoc index.emd --from markdown --o correction.odt
    pandoc index.emd --from markdown --o correction.docx

    # génère les sujets
    #pandoc index.emd --from markdown --o sujet.pdf
    #pandoc index.emd --from markdown --o sujet.odt
    #pandoc index.emd --from markdown --o sujet.docx
    cd ..

done
