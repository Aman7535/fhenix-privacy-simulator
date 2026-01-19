export const CONTENT = {
  hero: {
    title: "Fhenix Privacy Simulator",
    subtitle: "Native encrypted computation using Fully Homomorphic Encryption (FHE)",
    body: [
      "Fhenix enables smart contracts to operate directly on encrypted data.",
      "Inputs are encrypted client-side before being submitted to the blockchain.",
      "Smart contracts never access plaintext values and perform logic using Fully Homomorphic Encryption."
    ]
  },
  sections: [
    {
      id: "why-privacy",
      heading: "Why encryption matters on-chain",
      text: [
        "On most blockchains, transaction inputs are submitted in plaintext.",
        "Anyone observing the network can see the data before and after execution.",
        "This limits what applications can safely store or process on-chain.",
        "Fhenix introduces encrypted data types that allow computation without revealing underlying values."
      ]
    },
    {
      id: "input-encryption",
      heading: "Client-side encryption",
      text: [
        "On Fhenix, user inputs are encrypted before being sent to the blockchain.",
        "The encryption process happens outside the smart contract, ensuring that sensitive values are never transmitted in plaintext.",
        "Only encrypted ciphertext is included in the transaction payload."
      ]
    },
    {
      id: "on-chain-storage",
      heading: "Encrypted on-chain state",
      text: [
        "Encrypted values are stored on-chain as ciphertext.",
        "These values appear as opaque bytes and cannot be interpreted without authorization.",
        "Even though the data is encrypted, it remains usable inside smart contract logic."
      ]
    },
    {
      id: "encrypted-computation",
      heading: "Computation over ciphertext",
      text: [
        "Fhenix provides encrypted data types such as encrypted integers and booleans.",
        "Smart contracts can perform arithmetic and comparison operations directly on encrypted values.",
        "Throughout execution, the contract never decrypts or accesses the underlying plaintext."
      ]
    },
    {
      id: "permissioned-access",
      heading: "Controlled data disclosure",
      text: [
        "Encrypted values can be selectively revealed using permits.",
        "Permits authorize re-encryption or unsealing of specific data for specific users.",
        "Without a valid permit, encrypted values remain unreadable.",
        "This enables fine-grained control over who can access decrypted information."
      ]
    },
    {
      id: "developer-experience",
      heading: "Developer workflow",
      text: [
        "Developers write Solidity smart contracts using Fhenix-provided encrypted types.",
        "Encryption and permit handling are managed client-side using cofhejs.",
        "The overall programming model remains compatible with familiar EVM tooling."
      ]
    },
    {
      id: "application-patterns",
      heading: "What encrypted computation enables",
      text: [
        "Encrypted computation allows new application patterns, including:",
        "• private user inputs",
        "• confidential on-chain state",
        "• selective data visibility",
        "• privacy-preserving logic execution",
        "These patterns are difficult or impossible to achieve using plaintext smart contracts."
      ]
    },
    {
      id: "educational-disclaimer",
      heading: "About this simulator",
      text: [
        "This simulator is an educational visualization.",
        "It demonstrates concepts described in the Fhenix documentation and does not represent live protocol execution or performance.",
        "The goal is to help developers understand how encrypted computation works on Fhenix."
      ]
    }
  ],
  footer: {
    text: "Built for learning and experimentation with Fhenix Fully Homomorphic Encryption.",
    disclaimer: "“This is an educational visualization based on concepts described in the Fhenix documentation.”"
  }
};
