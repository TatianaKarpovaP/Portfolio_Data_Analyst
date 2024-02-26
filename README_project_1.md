# Project 'Credit risk score'
###### *This project is an intellectual property. When quoting, please indicate the original source*

During my first academic term, I have completed a final assignement and for the topic I have chosen to focus on the banking sector and the issues of credit risk assessment. I conducted an analysis of an open database from a repository of Chief Data Scientist at Prediction Consultants in Israel - [Roi Polanitzer (github account)](https://github.com/frm-garp). The raw data can be found [here](https://github.com/frm-garp/Logistic-Regression-in-Python--Predict-the-Probability-of-Default-of-an-Individual/blob/main/bank.csv).

# Content
1. [Problem and dataset](#title1)
    - [Problem formulation](#title2)
    - [Dataset description](#title3)
    - [Dataset transforming](#title4)
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
2. education – customer education level;
3. years_with_current_employer – time with current employer, years;
4. years_at_current_address – time at the current address, years;
5. household_income – annual income,  in thousands of USD;
6. debt_to_income_ratio – debt-to-income ratio, %;
7. credit_card_debt – debt on the credit card, in thousands of USD;
8. other_debt – other debts,  in thousands of USD;
9. y (or 'default' feature) – indicates whether a customer defaulted in the past if = 1 than yes, if = 0 does not.

The analysis is based on the hypothesis that unpaid debts in the past leads to unpaid debts in the future. That is why the ‘default’ variable is dependent in the models in this project. Moreover, it presents two classes of customers: reliable if ‘default’=1 and unreliable if ‘default’=0.

All further calculations are made in Python. The data is partly presented below. 

### <a id="title4">Dataset transforming</a> 
A few steps are made in order to detect errors and inaccuracies and as a result having clean data for further analysis.
- to detect Nan values;
- to detect abnormal values;
- to check all values are with expected type.

```python
    print(dataset.head())
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
        <th>y (default)</th>
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

No significant errors or missing values were found. If any were discovered, they can be replaced using one of the following methods: 
1) Completely removing such objects from the data set (I do not recommend this method);
2) Replacing each value with the mean of the sample.

```python
    print(dataset.info())
```
Output
```
    <class 'pandas.core.frame.DataFrame'>
RangeIndex: 41188 entries, 0 to 41187
Data columns (total 10 columns):
 #   Column                       Non-Null Count  Dtype  
---  ------                       --------------  -----  
 0   loan_applicant_id            41188 non-null  int64  
 1   age                          41188 non-null  int64  
 2   education                    41188 non-null  object 
 3   years_with_current_employer  41188 non-null  int64  
 4   years_at_current_address     41188 non-null  int64  
 5   household_income             41188 non-null  int64  
 6   debt_to_income_ratio         41188 non-null  float64
 7   credit_card_debt             41188 non-null  float64
 8   other_debt                   41188 non-null  float64
 9   y                            41188 non-null  int64  
dtypes: float64(3), int64(6), object(1)
memory usage: 3.1+ MB
```
It is seen that the database contains 41,188 records. This is a significant amount from which to draw representative conclusions. All the data is in the expected format. At the same time, I have a desire to standardize the "education" feature. It is made as:
```python
def educational_coding(dataset):
    education_mapping = {
        'university.degree': 1,
        'high.school': 2,
        'illiterate': 3,
        'basic': 4,
        'professional.course': 5
    }

    dataset['education'] = dataset['education'].replace(education_mapping)
    return(dataset)
```

Now, let us take a look at some descriptive statistics:
```python
    print(dataset.describe().to_string())
```
Output
```
Dataset description
        loan_applicant_id        age  education  years_with_current_employer  years_at_current_address  household_income  debt_to_income_ratio  credit_card_debt  other_debt          y
count          41188.000  41188.000  41188.000                    41188.000                 41188.000         41188.000             41188.000         41188.000   41188.000  41188.000
mean           20594.500     38.008      2.993                       13.550                    15.385           139.707                16.224             9.577      13.758      0.113
std            11890.096     10.624      1.419                        8.145                     9.184            81.688                 9.191            12.409      14.597      0.316
min                1.000     20.000      1.000                        0.000                     0.000            14.000                 0.400             0.006       0.022      0.000
25%            10297.750     29.000      2.000                        6.000                     7.000            74.000                 8.452             1.853       3.784      0.000
50%            20594.500     38.000      3.000                       14.000                    15.000           134.000                16.105             5.311       9.154      0.000
75%            30891.250     47.000      4.000                       21.000                    23.000           196.000                23.731            12.637      18.907      0.000
max            41188.000     56.000      5.000                       29.000                    31.000           446.000                41.294           149.016     159.198      1.000
```
The boolean value of Y can be ignored, since statistics do not provide any useful information. This value is analysed later.

I assume that function ‘describe()’ provides not enough details, and I decided to create its own table with more coefficients. 
```python
def statistic(dataset): #design a table with different coefficiets
    result_table = pd.DataFrame(index=['Mean', 'Harmonic Mean', 'Range', 'Median',
                                       'Mode','Standard Deviation', 'Variance',
                                       'Skewness', 'Kurtosis', 'Entropy'])
    numeric_columns = dataset.iloc[:, 1:-1] #choosing only numerical values (dafault and ids are not included)
    for column in numeric_columns:
        result_table[column] = [np.mean(numeric_columns[column]),
                                st.harmonic_mean(numeric_columns[column].tolist()),
                                np.ptp(numeric_columns[column]),
                                np.median(numeric_columns[column]),
                                st.mode(numeric_columns[column].tolist()),
                                np.std(numeric_columns[column]),
                                np.var(numeric_columns[column]),
                                skew(numeric_columns[column]),
                                kurtosis(numeric_columns[column]),
                                entropy(numeric_columns[column].dropna())]
    result_table_rounded = result_table.round(3)
    print('\n',result_table_rounded.to_string())
```
Output
```
                         age  education  years_with_current_employer  years_at_current_address  household_income  debt_to_income_ratio  credit_card_debt  other_debt
Mean                 38.008      2.993                       13.550                    15.385           139.707                16.224             9.577      13.758
Harmonic Mean        34.830      2.178                        0.000                     0.000            82.480                 7.525             1.172       3.149
Range                36.000      4.000                       29.000                    31.000           432.000                40.894           149.010     159.176
Median               38.000      3.000                       14.000                    15.000           134.000                16.105             5.311       9.154
Mode                 43.000      1.000                        2.000                    28.000           201.000                12.117            14.377       8.887
Standard Deviation   10.623      1.419                        8.145                     9.184            81.687                 9.191            12.408      14.596
Variance            112.859      2.013                       66.341                    84.352          6672.773                84.480           153.970     213.053
Skewness              0.002      0.003                        0.015                     0.004             0.759                 0.148             3.279       2.558
Kurtosis             -1.206     -1.307                       -1.192                    -1.199             0.910                -0.875            16.972      10.950
Entropy              10.586     10.505                       10.412                    10.415            10.452                10.446            10.036      10.181

```


