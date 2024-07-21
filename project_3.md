<div style="position: fixed; bottom: 20px; right: 20px; z-index: 999;">
  <a href="https://tatianakarpovap.github.io/Portfolio_Data_Analyst/" target="_self" style="padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Main page</a>
</div>


# Project 'Sales visualization'
###### *This project is my intellectual property. When quoting, please indicate the original source*

#### Please note that if the dashboard does not display correctly, you can follow the original Tableau website. To do so, please click the "View on Tableau Public" button at the bottom of the dashboard.

Here you may find my visualization for Sales. I conducted an analysis of an open database from The Kaggle.com.  The data source is [here](https://www.kaggle.com/datasets/vivek468/superstore-dataset-final).

# Content
1. [Visualization dashboard using Tableau](#title1)
2. [Key findings](#title2)
3. [Management recommendations](#title3)

## <a id="title1">Visualization dashboard using Tableau</a>
Data contains 32581 objects and 12 attribtes which are the following:
1. Row ID => Unique ID for each row.
2. Order ID => Unique Order ID for each Customer.
3. Order Date => Order Date of the product.
4. Ship Date => Shipping Date of the Product.
5. Ship Mode=> Shipping Mode specified by the Customer.
6. Customer ID => Unique ID to identify each Customer.
7. Customer Name => Name of the Customer.
8. Segment => The segment where the Customer belongs.
9. Country => Country of residence of the Customer.
10. City => City of residence of of the Customer.
11. State => State of residence of the Customer.
12. Postal Code => Postal Code of every Customer.
13. Region => Region where the Customer belong.
14. Product ID => Unique ID of the Product.
15. Category => Category of the product ordered.
16. Sub-Category => Sub-Category of the product ordered.
17. Product Name => Name of the Product
18. Sales => Sales of the Product.
19. Quantity => Quantity of the Product.
20. Discount => Discount provided.
21. Profit => Profit/Loss incurred.

Before working with the data it was processed and outliers are clean.

<html>
<head>

    <title>visualization</title>

    <script type="text/javascript"
	    src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
    <script type="text/javascript"></script>

</head>

<body>

    <div id="vizContainer3"></div>

    <script src="./app3.js"></script>

</body>

</html>

  
## <a id="title2">Key findings</a>
1. Total sales were $ 2 297 201, and total profit was $ 286 397. There has been a positive trend in sales growth since 2014. The average sales level has also shown an increase, indicating steady business growth.
2. The largest profits were recorded in New York ($ 62 037) and Los Angeles ($ 30 441), while a loss was recorded in Chicago ($ -6 655)
3. The "Consumer" segment brought the largest profit $ - 134 120, followed by "Corporate" (corporate clients) $ - 91 980. The least profit was brought by the "Home Office" segment $ - 60 300.
4. The most profitable subcategories were "Copiers", "Phones", and "Accessories". The least profitable or unprofitable subcategories included "Tables", "Bookcases", and "Supplies".


## <a id="title3">Management recommendations</a>  
1. Continue to focus on growing sales and profits, especially in the "Consumer" and "Corporate" segments.
2. Explore opportunities to increase sales and profitability in the "Copiers", "Phones", and "Accessories" product categories.
3. Consider strategies to reduce costs and increase efficiency in the "Tables", "Bookcases", and "Supplies" categories. Strengthening marketing and sales efforts in profitable cities: focus on markets such as New York and Los Angeles, where sales and profits are highest. And improving performance in loss-making cities: to analyze the causes of losses in Chicago and develop a strategy to improve sales and profits in this region. 
4. Develop targeted marketing campaigns and special offers for the "Consumer" segment that generates the most profit. 
5. Continue to promote and improve profitable subcategories such as "Copiers", "Phones" and "Accessories". Review the assortment and possibly reduce or change the strategy for unprofitable subcategories such as "Tables", "Bookcases" and "Supplies".
6. Conduct a detailed analysis of production and marketing costs for unprofitable product categories and find ways to reduce costs or increase the value of these products.


######  *Thank you for your attention. I am available to answer any questions or provide suggestions*

