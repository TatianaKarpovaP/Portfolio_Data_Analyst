# Project 'Credit risk score'
###### *This project is an intellectual property. When quoting, please indicate the original source*

During my first academic term, I have completed a final assignement and for the topic I have chosen to focus on the banking sector and the issues of credit risk assessment. I conducted an analysis of an open database from a repository of Chief Data Scientist at Prediction Consultants in Israel - [Roi Polanitzer (github account)](https://github.com/frm-garp). The raw data can be found [here](https://github.com/frm-garp/Logistic-Regression-in-Python--Predict-the-Probability-of-Default-of-an-Individual/blob/main/bank.csv).

# Content
1. [Problem and dataset](#title1)
    - [Problem formulation](#title2)
    - [Dataset description](#title3)
    - [Dataset cleaning](#title4)
2. [Problem and dataset](#title5) 
  
##  <a id="title1">Problem and dataset</a>
### <a id="title2">Problem formulation</a>
   Financial institutes like banking are always essential in both global and local economic development. For the past 40 years share of households’ loans and debts in GDP in most countries are constantly growing according to International Monetary Fund statistic (2022). Credit is shown to be likely reliable instrument for people.
   
   Many banks now offer a wide variety of credit services. Loans can be issued for various purposes, and interest on loans is the main source of income for banks. Therefore, in order not to lose profits, the flow of credit payments must be constant (Miguéis V.L., Benoit D.F. and Van den Poel D. 2013). But how can banks ensure this? The answer is a client's credit risk assessment. Thus, for example, the researchers studied Machine Learning classifiers techniques based on probability of default value. As a result, they got promising methods, providing accurate credit risk scores (Florez-Lopez R. and Ramon-Jeronimo J.M. 2014, Hooman A. et al 2016).
   
   The researchers Subburayan B. et al emphasize the inevitability of the transformation of the banking sector with the help of Machine Learning (2023). For example, quality assessment, bank transactions trends, client traffics. It leads to increasing in customers happiness and income.
   
   Although, one of the most important factors in banking operation system is risk management. It causes improvements of bank’s loan portfolio, decreases credit losses from unsecured customers, and even lower default rates. Also, Witzel M., and Bhargava N. claim that the implementation is risk-driven approaches based on Machine Learning may lead not only to time savings and big data problems solutions, but also to reputational and financial impacts (2023).
   
   In addition, banks have limited information and at the same time must be confident in its reliability. Even if the client has a stable job and has bought a house, this is not enough. There are many factors that need to be taken into account. At the same time, all banks collect different information about their potential customers. Therefore, each such financial institution needs to develop its own methods to assess credit risks.
   
   From all this it follows that banks face an important problem: how to assess the credit risk for each new customer with information about their past default experience? My work provides one of possibles answer to this question.

### <a id="title3">Dataset description</a> 
This research is based on a dataset extracted from a [Roi Polanitzer's github repository](https://github.com/frm-garp/Logistic-Regression-in-Python--Predict-the-Probability-of-Default-of-an-Individual/blob/main/bank.csv). It contains 700 samples with 9 features. These features are:
1. age – customer age, years;
2. ed – customer education level, coded (1 – university degree, 2 – high school, 3 – illiterate, 4 – basic, 5 – professional course)
3. employ – time with current employer, years;
4. address – time at the current address, years;
5. income – annual income,  in thousands of USD;
6. debtinc – debt-to-income ratio, %;
7. creddebt – debt on the credit card, in thousands of USD;
8. othdebt – other debts,  in thousands of USD;
9. default – indicates whether a customer defaulted in the past if = 1 than yes, if = 0 does not.

The analysis is based on the hypothesis that unpaid debts in the past leads to unpaid debts in the future. That is why the ‘default’ variable is dependent in the models in this project. Moreover, it presents two classes of customers: reliable if ‘default’=1 and unreliable if ‘default’=0.

All further calculations are made in Python. The data is partly presented below. 

### <a id="title4">Dataset cleaning</a> 
A few steps are made in order to detect errors and inaccuracies and as a result having clean data for further analysis.
- to detect Nan values;
- to detect abnormal values;
- to check all values are with expected type.

```python
    print(dataset.head())
    print(dataset.info())
    print(dataset.describe().to_string())
```

Output
<table>
    <tr>
        <th>#</th>
        <th>loan_applicant_id</th>
        <th>age</th>
        <th>education</th>
        <th>years_with_current_employer</th>
        <th>years_at_current_address</th>
        <th>household_income</th>
        <th>debt_to_income_ratio</th>
        <th>credit_card_debt</th>
        <th>other_debt</th>
        <th>default</th>
    </tr>
    <tr>
        <td>0</td>
        <td>191</td>
        <td>44</td>
        <td>university.degree</td>
        <td>10</td>
        <td>20</td>
        <td>192</td>
        <td>12.116645</td>
        <td>14.377313</td>
        <td>8.886645</td>
        <td>1</td>
    </tr>
    <tr>
        <td>1</td>
        <td>34318</td>
        <td>34</td>
        <td>high.school</td>
        <td>3</td>
        <td>18</td>
        <td>57</td>
        <td>14.264229</td>
        <td>5.137880</td>
        <td>2.992730</td>
        <td>0</td>
    </tr>
    <tr>
        <td>2</td>
        <td>14932</td>
        <td>45</td>
        <td>university.degree</td>
        <td>14</td>
        <td>24</td>
        <td>212</td>
        <td>7.285681</td>
        <td>10.460306</td>
        <td>4.985339</td>
        <td>0</td>
    </tr>
    <tr>
        <td>3</td>
        <td>2776</td>
        <td>33</td>
        <td>illiterate</td>
        <td>12</td>
        <td>5</td>
        <td>418</td>
        <td>11.386272</td>
        <td>3.040189</td>
        <td>44.554429</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td>11915</td>
        <td>20</td>
        <td>basic</td>
        <td>4</td>
        <td>19</td>
        <td>122</td>
        <td>28.418494</td>
        <td>14.560450</td>
        <td>20.110112</td>
        <td>0</td>
    </tr>
</table>
