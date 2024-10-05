<template>
    <div class="card">
        <DataTable 
            :value="products" 
            paginator 
            :rows="1" 
            :totalRecords="totalRecords" 
            :lazy="true" 
            @page="onPageChange"
        >
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xl font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised @click="refreshProducts" />
                </div>
            </template>

            <Column field="name" header="Name"></Column>

            <Column header="Image">
                <template #body="slotProps">
                    <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-24 rounded" />
                </template>
            </Column>

            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>

            <Column field="category" header="Category"></Column>

            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly />
                </template>
            </Column>

            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>

            <template #footer>
                In total, there are {{ totalRecords }} products.
            </template>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/componentable/productService';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';

export default {
    components: {
        DataTable,
        Column,
        Button,
        Rating,
        Tag,
    },
    data() {
        return {
            products: [],
            totalRecords: 0,
            currentPage: 0,
        };
    },
    mounted() {
        this.loadProducts();
    },
    methods: {
        loadProducts(page = 0) {
            ProductService.getProducts().then((data) => {
                this.totalRecords = data.length;
                this.products = data.slice(page * 1, (page + 1) * 1);
            });
        },
        refreshProducts() {
            this.loadProducts(this.currentPage);
        },
        onPageChange(event) {
            this.currentPage = event.page;
            this.loadProducts(this.currentPage);
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';
                case 'LOWSTOCK':
                    return 'warn';
                case 'OUTOFSTOCK':
                    return 'danger';
                default:
                    return null;
            }
        },
    },
};
</script>
