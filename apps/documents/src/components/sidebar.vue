<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
    PopoverArrow,
    PopoverContent,
    PopoverPortal,
    PopoverRoot,
    PopoverTrigger,
} from 'reka-ui';
import Link from './link.vue';

const props = defineProps<{
    contents: {
        label: string;
        href: string;
        contents: {
            label?: string;
            contents: {
                label: string;
                href: string;
                external: boolean;
            }[];
        }[];
    }[];
}>();
</script>

<template>
    <div class="flex gap-10">
        <div class="hidden md:flex md:flex-col w-56 pt-12 pb-8 gap-5 shrink-0">
            <div
                v-for="heading in props.contents"
                class="w-full gap-4 flex flex-col"
            >
                <Link
                    bold
                    :href="heading.href"
                    :label="heading.label"
                    class="text-lg"
                />

                <div class="w-full gap-6 flex flex-col">
                    <div
                        v-for="section in heading.contents"
                        class="w-full gap-3 flex flex-col"
                    >
                        <p v-if="section.label" class="font-bold text-sm">
                            {{ section.label }}
                        </p>
                        <div class="flex">
                            <div class="h-auto w-px ml-2 mr-4 bg-neutral-800" />
                            <div class="w-full gap-2 flex flex-col">
                                <Link
                                    v-for="item in section.contents"
                                    :href="item.href"
                                    :label="item.label"
                                    :external="item.external"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden md:block h-auto w-px mt-6 bg-neutral-800"></div>

        <PopoverRoot>
            <PopoverTrigger
                class="md:hidden w-full p-3 mt-4 rounded-lg flex items-center justify-center ring-1 ring-neutral-600 cursor-pointer"
            >
                <Icon
                    icon="lucide:menu"
                    :width="24"
                    :height="24"
                    class="shrink-0 text-neutral-200"
                />
            </PopoverTrigger>
            <PopoverPortal>
                <PopoverContent
                    side="bottom"
                    :align="'center'"
                    :side-offset="5"
                    class="md:hidden rounded-lg px-5 py-8 mx-3 bg-neutral-900 ring-2 ring-neutral-700 shadow-lg shadow-black"
                >
                    <div class="w-[80vw] flex flex-col gap-5 shrink-0">
                        <div
                            v-for="heading in props.contents"
                            class="w-full gap-4 flex flex-col"
                        >
                            <Link
                                bold
                                :href="heading.href"
                                :label="heading.label"
                            />

                            <div class="w-full gap-6 flex flex-col">
                                <div
                                    v-for="section in heading.contents"
                                    class="w-full gap-4 flex flex-col"
                                >
                                    <p
                                        v-if="section.label"
                                        class="font-bold text-sm"
                                    >
                                        {{ section.label }}
                                    </p>
                                    <div class="flex">
                                        <div
                                            class="h-auto w-px ml-2 mr-4 bg-neutral-800"
                                        />
                                        <div class="w-full gap-2 flex flex-col">
                                            <Link
                                                v-for="item in section.contents"
                                                :href="item.href"
                                                :label="item.label"
                                                :external="item.external"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PopoverArrow class="fill-neutral-700" />
                </PopoverContent>
            </PopoverPortal>
        </PopoverRoot>
    </div>
</template>
