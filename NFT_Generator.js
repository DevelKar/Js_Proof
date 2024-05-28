// Create a variable to hold the NFTs
// Using Array to store the NFTs
let nftCollection = [];

// Create the mintNFT function
function mintNFT(name, description, image, attributes) {
    // Create an NFT object with the given metadata
    let nft = {
        name: name,
        description: description,
        image: image,
        attributes: attributes
    };
    
    // Store the NFT object in the nftCollection array
    nftCollection.push(nft);
}

// Create the listNFTs function
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Image: " + nft.image);
        console.log("Attributes: " + JSON.stringify(nft.attributes));
        console.log("-------------------------");
    });
}

// Create the getTotalSupply function
function getTotalSupply() {
    return nftCollection.length;
}

// Example usage
mintNFT("Pikachu", "Electric type", "pikachu.jpg", { rarity: "common", power: 50 });
mintNFT("Charizard", "Fire/Flying type", "image2.png", { rarity: "rare", power: 90 });
mintNFT("Bulbasaur", "Grass/poison type", "image3.png", { rarity: "commom", power: 45 });
mintNFT("Mewtwo", "Psychic type", "image4.png", { rarity: "rare", power: 100 });

// Print the total number of NFTs we have minted to the console
listNFTs();
console.log("Total NFTs: " + getTotalSupply());
