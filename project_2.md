<div style="position: fixed; bottom: 20px; right: 20px; z-index: 999;">
  <a href="https://tatianakarpovap.github.io/Portfolio_Data_Analyst/" target="_self" style="padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Main page</a>
</div>


# Project 'Credit risk visualization'
###### *This project is my intellectual property. When quoting, please indicate the original source*

Here you may find my visualization for othe case of Credit Risk. I conducted an analysis of an open database from The Kaggle.com.  The data source is [here](https://www.kaggle.com/datasets/laotse/credit-risk-dataset/data).


# Content
1. [Visualization dashboard using Tableau](#title1)
2. [Key findings](#title2)
3. [Management recommendations](#title3)
4. [Concluding remarks](#title4)

## <a id="title1">Visualization dashboard using Tableau</a>

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
1) Amount of default credits is quite large;
2) Risky Grades: D, E, F, G
3) Risky intent:
   A, B - Debt consolidation, Education, Medical and Personal
   C, D - Home impov., Medical, Debt consolidation
4) Less risky grades: 
   A, B - Education, Venture, Medical and Personal
   C, D - Education, Personal, and Venture
5) Grades groups are highly diverse;   

## <a id="title3">Management recommendations</a>  
1) Develop credits programs for the profitable sectors;
2) Develop extra servises/programms for risky sectors (like medical or finance insurance, refinancing debts with a lower interest rate)
3) Reconsider the approach to assigning a grade;

## <a id="title4">Concluding remarks</a>

After the analysis, the main findings can be practically applied in the Artificial Bank operation. In particular, the distinctive characteristics of reliable and unreliable groups, as well as the main factors influencing group belonging. 
- Firstly, to use the proposed model in the web application on daily basis for decision making. Just entering the client's basic data, such as age, education level, work experience, residence at the same address, annual income, debt-to-income ratio, credit card and other debts, and the probability of being unreliable is calculated. 
- Secondly, to design its own credit scores, for example, the “ABC” system, dividing customers into three groups depended on the probability of being unreliable. Group "A" includes the most reliable clients (0.45–0), "C" - the least reliable (1–0.56), and "B" (0.55–0.46) is considered a “Gray zone” where changes are required to improve the assessment, for example, an find new income sources or repayment of existing debts.
- Thirdly, to supplement the database with new loan parameters to improve the model such as term, interest rate, and amount. It may extend the model. 

To improve the model, I recommend a more in-depth analysis of the influence of the debt structure, the income of all members of the household, and household composition. Additionally, as a new factor, I would like to consider the impact of a credit terms on the final decision-making process. This could be assisted by statistics on the following factors: total amount, duration, purpose, and the percentage of the requested credit. 

These recommendations may reduce the percentage of non-repayment loans and increase the bank's assets turnover, making it more financial stable.


######  *Thank you for your attention. I am available to answer any questions or provide suggestions*

