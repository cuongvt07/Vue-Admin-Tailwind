<template>
    <div class="card">
        <DataTable 
            :value="products" 
            paginator 
            :rows="5" 
            :totalRecords="totalRecords" 
            :lazy="true"
            :sortField="sortField" 
            :sortOrder="sortOrder" 
            :selection="selectedProducts" 
            selectionMode="multiple" 
            @selection-change="onSelectionChange" 
            @update:selection="onUpdateSelection"
            @sort="onSortChange" 
            @page="onPageChange"
        >
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xl font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised @click="refreshProducts" />
                </div>

                <div class="flex items-center gap-2 mt-2">
                    <MultiSelect 
                        v-model="selectedStatuses" 
                        :options="statuses" 
                        optionLabel="label" 
                        optionValue="value"
                        placeholder="Status" 
                        class="h-8"
                        :panelStyle="{ maxHeight: '300px' }" 
                        :showClear="true" 
                        @change="filterProducts"
                    />

                    <div class="relative w-1/5">
                        <InputText 
                            v-model="search" 
                            type="text" 
                            placeholder="Search..." 
                            class="h-8 pr-10 w-full p-2"
                            @input="filterProducts" 
                        />
                        <i class="pi pi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    </div>
                </div>
            </template>

            <Column selectionMode="multiple" headerStyle="width: 3rem" />

            <Column field="name" header="Name" sortable></Column>

            <Column field="info" header="Info"></Column>

            <Column field="amount" header="Amount" sortable></Column>

            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                        :alt="slotProps.data.image" class="w-24 rounded" />
                </template>
            </Column>

            <Column field="price" header="Price" sortable>
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>

            <Column field="category" header="Category" sortable></Column>

            <Column field="status" header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>

            <Column field="show" header="Show">
                <template #body="slotProps">
                    <InputSwitch v-model="slotProps.data.show" @change="toggleShow(slotProps.data)" />
                </template>
            </Column>

            <Column header="Actions">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" class="mr-2" />
                    <Button icon="pi pi-trash" class="p-button-danger" />
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
import Tag from 'primevue/tag';
import MultiSelect from 'primevue/multiselect';
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
import InputSwitch from 'primevue/inputswitch';

export default {
    components: {
        DataTable,
        Column,
        Button,
        Tag,
        MultiSelect,
        InputText,
        Slider,
        InputSwitch,
    },
    data() {
        return {
            products: [],
            totalRecords: 0,
            currentPage: 0,
            searchTerm: '',
            selectedCities: [],
            selectedStatuses: [],
            selectedProducts: [], // Array to hold selected products
            statuses: [
                { label: 'In Stock', value: 'INSTOCK' },
                { label: 'Low Stock', value: 'LOWSTOCK' },
                { label: 'Out of Stock', value: 'OUTOFSTOCK' },
            ],
            sortField: 'name',
            sortOrder: 1,
        };
    },
    mounted() {
        this.loadProducts();
    },
    methods: {
        loadProducts(page = 0, sortField = this.sortField, sortOrder = this.sortOrder) {
            ProductService.getProducts().then((data) => {
                console.log(data);
                data.sort((a, b) => {
                    let result = 0;
                    if (a[sortField] < b[sortField]) {
                        result = -1;
                    } else if (a[sortField] > b[sortField]) {
                        result = 1;
                    }
                    return sortOrder === 1 ? result : -result;
                });

                this.totalRecords = data.length;
                this.products = data.slice(page * 5, (page + 1) * 5);
            });
        },
        refreshProducts() {
            this.loadProducts(this.currentPage);
        },
        onPageChange(event) {
            this.currentPage = event.page;
            this.loadProducts(this.currentPage, this.sortField, this.sortOrder);
        },
        onSortChange(event) {
            this.sortField = event.sortField;
            this.sortOrder = event.sortOrder;
            this.loadProducts(this.currentPage, this.sortField, this.sortOrder);
        },
        onSelectionChange(event) {
            this.selectedProducts = event.value; // Update selected products
        },
        onUpdateSelection(selection) {
            this.selectedProducts = selection;
        },
        filterProducts() {
            // Implement filtering logic based on searchTerm, selectedCities, selectedStatuses, and priceRange
        },
        toggleShow(product) {
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
