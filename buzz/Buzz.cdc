import NonFungibleToken from 0x631e88ae7f1d7c20
import Crypto

pub contract Buzz: NonFungibleToken {
    // Events
    pub event ContractInitialized()
    pub event Withdraw(id: UInt64, from: Address?)
    pub event Deposit(id: UInt64, to: Address?)



    // ******************
    // Contract-level Fields
    // ******************

    // Total supply
    pub var totalSupply: UInt64 


    // ******************
    // Contract-level Composite Type Definitions
    // ******************


    // A chip 
    pub resource NFT: NonFungibleToken.INFT { 

        // Data to be stored by the owner of the chip
        pub var publicData: {String: String}

        // Data to be stored by the owner of the chip (private)
        access(account) var privateData: String

        // ID
        pub let id: UInt64

        // Company ID
        pub let companyId: UInt64

        // Name
        access(account) var name: String

        // Password
        priv let password: String
        
        // Initialization
        init(name: String, companyId: UInt64, id: UInt64, password: String) {
            // TODO: Allow it to have many different artists
            // TODO: Change base URL
            // TODO: Increment in creation form
            self.publicData = {}
            self.privateData = ""
            self.id = id
            self.name = name
            self.companyId = companyId
            self.password = password
        }


        pub fun getInfo(): {String: AnyStruct} {
            let information: {String: AnyStruct} = {}
            information["id"] = self.id
            information["companyId"] = self.companyId
            information["publicData"] = self.publicData
            return information
        }

        pub fun editPrivateData(info:String, password: String) {
            self.privateData = info
        } 

        pub fun editPublicData(info: {String: String}) {
            self.publicData = info
        } 

        pub fun editName(name: String) {
            self.name = name
        } 

        pub fun getPrivateInfo(): {String: AnyStruct} {
            let information: {String: AnyStruct} = {}
            information["id"] = self.id
            information["companyId"] = self.companyId
            information["publicData"] = self.publicData
            information["name"] = self.name
            var privateData = self.privateData
            var privateDataUtf = privateData.utf8
            information["privateData"] = Crypto.hashWithTag(privateDataUtf, tag: self.password, algorithm: HashAlgorithm.SHA2_256)

            return information
        }

        // TODO: Fix
        pub fun userGetInfo(): {String: AnyStruct} {
            let information: {String: AnyStruct} = {}
            information["id"] = self.id
            information["companyId"] = self.companyId
            information["publicData"] = self.publicData
            information["name"] = self.name
            information["privateData"] = self.privateData
            return information
        }


    }


    pub resource interface BuzzCollectionPublic {
        pub fun getInfo(): {UInt64:AnyStruct}
        pub fun borrowChip(id: UInt64):  &Buzz.NFT
    }

    pub resource Collection: NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic, BuzzCollectionPublic {

        // Dictionary to hold the NFTs in the Collection
        pub var ownedNFTs: @{UInt64: NonFungibleToken.NFT}

        init () {
            self.ownedNFTs <- {}
        }

        // deposit takes a Chip and adds it to the collections dictionary
        // and adds the ID to the id array
        pub fun deposit(token: @NonFungibleToken.NFT) {
            let token <- token as! @Buzz.NFT

            let tokenID: UInt64 = token.companyId

            let oldToken <- self.ownedNFTs[tokenID] <- token
            
            destroy oldToken
        }

        pub fun withdraw(withdrawID: UInt64): @NonFungibleToken.NFT {
            let nft <- self.ownedNFTs.remove(key: withdrawID) ?? panic("NFT not found")
            return <- nft
        }

        // getIDs returns an array of the IDs that are in the collection
        pub fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }


        // Returns a borrowed reference to an NFT in the collection
        // so that the caller can read data and call methods from it
        pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT {

            return &self.ownedNFTs[id] as &NonFungibleToken.NFT
        }

        // Returns a borrowed reference to an NFT in the collection
        // Fixes the problem with the type of the reference
        pub fun borrowChip(id: UInt64): &Buzz.NFT {
            let ref = &self.ownedNFTs[id] as auth &NonFungibleToken.NFT
            return ref as! &Buzz.NFT
        }
        
        

        // Get all the information from the Chips
        pub fun getInfo(): {UInt64:AnyStruct} {
    
            let a = self.ownedNFTs.keys
            let finalDictionary: {UInt64:AnyStruct} = {}
            for key in a {
                var currentSong: @NonFungibleToken.NFT? <- self.ownedNFTs[key] <- nil
                var currentSong2: @Buzz.NFT <-! currentSong as! @Buzz.NFT

                finalDictionary[key]= currentSong2.getInfo()

                self.ownedNFTs[key] <-! currentSong2

            }
            return finalDictionary
        }

        destroy() {
            destroy self.ownedNFTs
        }


    }



    // ******************
    // Contract-level functions
    // ******************



    // createEmptyCollection creates an empty Collection
    // and returns it to the caller so that they can own NFTs
    pub fun createEmptyCollection(): @Collection {
                    
        return <-create Buzz.Collection()

    }

    pub fun createChip(name: String, companyId: UInt64, password: String): @Buzz.NFT {

      let id = self.totalSupply
      var a <- create NFT(name: name, companyId: companyId, id: id, password: password)
      self.totalSupply = self.totalSupply + 1
      return <- a
    
    }

    // ******************
    // Initialization
    // ******************
    
    init() {
        // Initialize vars
        self.totalSupply = 0        
    }

}