import { mergeTypeDefs } from "@graphql-tools/merge";

// typeDefs
import userTypeDef from "./user.typeDefs.js";
import transactionTypeDef from "./transactions.typeDefs.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;