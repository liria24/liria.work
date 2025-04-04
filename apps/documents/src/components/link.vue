<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = withDefaults(
    defineProps<{
        label: string;
        href: string;
        external?: boolean;
        icon?: string;
        iconSize?: number;
        bold?: boolean;
    }>(),
    {
        external: false,
        iconSize: 16,
        bold: false,
    }
);
</script>

<template>
    <a
        tabindex="0"
        :href="props.href"
        :target="props.external ? '_blank' : '_self'"
        :class="[
            'rounded-md px-2 py-1 flex items-center gap-2',
            'text-neutral-400 hover:text-neutral-200',
            'ring-inset focus-visible:ring-1 ring-neutral-700 focus-visible:bg-neutral-800 focus-visible:outline-none',
            'transition duration-100  ease-in-out',
            props.external && 'justify-between',
        ]"
    >
        <Icon
            v-if="props.icon"
            :icon="props.icon"
            :width="props.iconSize"
            :height="props.iconSize"
        />
        <p
            :class="
                props.bold
                    ? 'text-md font-bold text-neutral-100'
                    : 'text-sm font-normal'
            "
        >
            {{ props.label }}
        </p>

        <Icon
            v-if="props.external"
            icon="lucide:move-up-right"
            :width="16"
            :height="16"
            class="text-neutral-400"
        />
    </a>
</template>
