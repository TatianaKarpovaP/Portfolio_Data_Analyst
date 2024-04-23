<div style="position: fixed; bottom: 20px; right: 20px; z-index: 999;">
  <a href="https://tatianakarpovap.github.io/Portfolio_Data_Analyst/" target="_self" style="padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Main page</a>
</div>


# Project 'Credit risk visualization'
###### *This project is my intellectual property. When quoting, please indicate the original source*

#### Please note that if the dashboard does not display correctly, you can follow the original Tableau website. To do so, please click the "View on Tableau Public" button at the bottom of the dashboard.

Here you may find my visualization for othe case of Credit Risk. I conducted an analysis of an open database from The Kaggle.com.  The data source is [here](https://www.kaggle.com/datasets/laotse/credit-risk-dataset/data).


# Content
1. [Visualization dashboard using Tableau](#title1)
2. [Key findings](#title2)
3. [Management recommendations](#title3)
4. [Concluding remarks](#title4)

## <a id="title1">Visualization dashboard using Tableau</a>
Data contains the following attribtes:
1) Age
2) Annual Income
3) Home ownership (Rent, mortgage, other)
4) Employment length (in years)
5) Loan intent (Personal, edication, medical, Venture, home improvement, debt consolidation)
6) Loan grade (A, B, C, D, E, F, G)
7) Loan amount
8) Interest rate
9) Loan status (non default/default)
10) Percent income (share  debt in income, %)
11) Historical default (was client non default/default before)
12) Credit history length (in years)

Before working with the data it was processed and outliers are clean. In particular samples with age outliers were expelled. 

<html>
<head>

    <title>visualization</title>

    <script type="text/javascript"
	    src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
    <script type="text/javascript"></script>

</head>

<body>

    <div id="vizContainer"></div>

    <script src="./app.js"></script>

</body>

</html>
  
## <a id="title2">Key findings</a>
1) Amount of default credits is quite large, I would say more than everage what requires immediate actions!;
2) Risky Grades are: D, E, F, G
3) Less risky grades are: 
   A, B - Education, Venture, Medical and Personal
   C, D - Education, Personal, and Venture
4) Risky intent are:
   A, B - Debt consolidation, Education, Medical and Personal
   C, D - Home impov., Medical, Debt consolidation
5) Grades groups are highly diverse;
6) Standard deviation for lots of factors are equal;

## <a id="title3">Management recommendations</a>  
1) Develop credits programs for the profitable sectors. For example, to increase the availability of loans to students for education by providing credit holidays);
2) Develop extra servises/programms for risky sectors. For example, in cooperation with medical insurance organizations, offer a low interest rate for loans for medical purposes; Or offer refinancing debts with a lower interest rate)
3) Reconsider the approach to assigning a grade. The 7 existing grades are divided uneven. There are clustering methods which are way more effective. 

These recommendations may reduce the percentage of non-repayment loans and increase the bank's assets turnover, making it more financial stable.

######  *Thank you for your attention. I am available to answer any questions or provide suggestions*

