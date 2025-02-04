import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type liriaGraphics = {
    contents: {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title: { ja: string; en: string };
        thumbnail: { url: string; width: number; height: number };
        booth: number;
        price: number;
        notForSale: boolean;
    }[];
};

export const getLiriaGraphics = async (
    queries?: MicroCMSQueries
): Promise<liriaGraphics> => {
    return await client.get<liriaGraphics>({
        endpoint: "liria-graphics",
        queries,
    });
};
