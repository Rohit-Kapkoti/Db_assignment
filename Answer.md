### 1. Relationship between "Product" and "Product_Category" entities

In the provided database diagram, there's no explicit "Product_Category" entity. Instead, the relationship between the "Product" and "Category" entities is represented through the "Product" schema's `category_id` attribute. This signifies a one-to-many relationship where each product belongs to one category.

Here's how the relationship works:

- Product Schema: This schema represents the "Product" entity and contains attributes such as `name`, `category_id`, and `inventory_id`.
- Category Schema: This schema represents the "Category" entity, which is indirectly related to the "Product" schema via the `category_id` attribute.

- Each document in the "Product" collection contains a `category_id` value that corresponds to a document in the "Category" collection.
- This relationship indicates that each product belongs to one specific category.
- The `category_id` attribute is defined as a reference to the "Category" collection, ensuring referential integrity.
- Through this relationship, you can query products and easily determine which category each product belongs to.

- The "Product" and "Category" entities are related through a one-to-many relationship, where each product belongs to one category, as indicated by the `category_id` attribute in the "Product" schema.

### 2. Ensuring each product in the "Product" table has a valid category assigned

To ensure that each product in the "Product" collection has a valid category assigned to it, you should enforce referential integrity through the database schema:

1. **Define Foreign Key Constraint**: In the MongoDB schema, the `category_id` attribute in the "Product" schema serves as a reference to the "\_id" field of documents in the "Category" collection, effectively establishing a foreign key relationship.

2. **Enforce Referential Integrity**: By defining the `category_id` attribute as a reference to the "Category" collection, the MongoDB driver automatically ensures that any value entered into the `category_id` attribute must match an existing document in the "Category" collection.

By enforcing referential integrity, you can guarantee that each product in the "Product" collection has a valid category assigned to it, maintaining data consistency in your MongoDB database.
