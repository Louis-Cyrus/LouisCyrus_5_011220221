/*
1. Récupération la liste des produit avec fetch et l'url adequate
2. a Si la récupération est un succès 
    - boucler sur les données récupérée [avec un FOR]
        - construit la variable avec le HTML adequat
    - réucpére le div HTML dans le quel on va insérer les produits
    - insérer les produit 
2. b si la récupération KO afficher un message d'erreur
*/

fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(produits) {
    console.log(produits);
    let produitsHTML  = ''

    //Boucle sur les produits renvoyés par l'API pour construire dyn
    for(const produit of produits)
    {
          produitsHTML += '<a href="./product.html?id='+produit['_id']+'">'+            
                              '<article>'+
                              '<img src="'+produit['imageUrl']+'" alt="'+['altTxt']+'">'+
                              '<h3 class="productName">'+produit['name']+'</h3>'+
                              '<p class="productDescription">'+produit['description']+'</p>'+
                              '</article>'+
                          '</a>'

    }
    
    //Récupération de l'id du contenant
    const section = document.getElementById('items')
    
    //insertion du HTML dynamiquement construit
    section.innerHTML = produitsHTML;
  })
  .catch(function(err) {
    // Une erreur est survenue
    console.log("Erreur de la requête API")
  });

  
