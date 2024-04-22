Feature: Test the page brokerkit.com

 
   Scenario: Validate lead profile log email
       Given I visit the login page
       When I submit valid login credentials
       And The user selects email
       And The user verifies the regression
       And The user log email
       And The user update information
       And The user edit the information
       And The user cancel the information
       And The user update information
       And The user edit the information
       And The user save the information
       And The user delete the information
       Then The user validate the information

   Scenario: Validate lead profile log text
      Given I visit the login page
       When I submit valid login credentials
       And The user selects text
       And The user verifies the regression
       And The user log text
       And The user update information
       And The user edit the information
       And The user cancel the information
       And The user update information
       And The user edit the information
       And The user save the information
       And The user delete the information
       Then The user validate the information

   Scenario: Validate lead profile log phone
       Given I visit the login page
       When I submit valid login credentials
       And The user selects phone
       And The user verifies the regression
       And The user log phone
       And The user update information
       And The user edit the information
       And The user cancel the information
       And The user update information
       And The user edit the information
       And The user save the information
       And The user delete the information
       Then The user validate the information

   Scenario: Validate lead profile log note
       Given I visit the login page
       When I submit valid login credentials
       And The user selects note
       And The user verifies the regression
       And The user log note
       And The user update note
       And The user edit the information
       And The user cancel the information
       And The user update note
       And The user edit the information
       And The user save the information
       And The user delete the note
       Then The user validate the information

       ##Examples

  # Scenario: Sort the products by price from high to low
   #    Given I visit the login page
    #   When I submit valid login credentials
     #  Then I validate the products sorted

   # Scenario: Submit an order for the Sauce Labs Fleece Jacket item
    #   Given I visit the login page
     #  When I submit valid login credentials
      # Then I should see failure2
       #|username       |last            |postal       |
       #|Juan           |Osorio          |059008       |




