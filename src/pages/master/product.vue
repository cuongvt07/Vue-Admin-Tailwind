<template>
    <div class="card">
        <!-- DataTable Component with Pagination -->
        <DataTable 
            :value="products" 
            paginator 
            :rows="5" 
            :totalRecords="totalRecords" 
            :lazy="true" 
            @page="onPageChange"
        >
            <!-- Header with refresh button -->
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xl font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised @click="refreshProducts" />
                </div>
            </template>

            <!-- Product Name Column -->
            <Column field="name" header="Name"></Column>

            <!-- Image Column -->
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-24 rounded" />
                </template>
            </Column>

            <!-- Price Column with Currency Formatting -->
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>

            <!-- Category Column -->
            <Column field="category" header="Category"></Column>

            <!-- Rating Column with Rating Component -->
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly />
                </template>
            </Column>

            <!-- Status Column with Severity Tags -->
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>

            <!-- Footer showing total product count -->
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
            products: [], // Products will be loaded here
            totalRecords: 0, // To store total number of records
            currentPage: 0, // To store current page number
        };
    },
    mounted() {
        // Fetch product data when the component is mounted
        this.loadProducts();
    },
    methods: {
        loadProducts(page = 0) {
            ProductService.getProducts().then((data) => {
                this.totalRecords = data.length; // Set total records
                this.products = data.slice(page * 5, (page + 1) * 5); // Slice data for pagination
            });
        },
        refreshProducts() {
            this.loadProducts(this.currentPage); // Refresh products for the current page
        },
        onPageChange(event) {
            this.currentPage = event.page;
            this.loadProducts(this.currentPage); // Load products for the new page
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
