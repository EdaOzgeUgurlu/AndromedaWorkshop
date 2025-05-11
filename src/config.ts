import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction: "andr1jgz8sssrq6lte8w9rnu3xtw6xjrgn0kgmlcnv5uws0pvefm2clkqcgr2x0",
            cw721: "andr1fn3avg2hfsytp3ssp9mrmk9c0np77xgxeka443geq23y4hp924wqyhmglp",
            name: "androworkshop",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
    ],
};

export default CONFIG;
