Feature: End-to-End Product Purchase Flow

  Scenario: Successfully purchasing a product

    # Step 1
    Given I am on the homepage
    When I search for the product using product Id : "86800"
    Then I should be navigated to the Product Description Page (PDP) for the product

    # Step 2
    When I click the Add to Bag button
    Then the bag overlay should appear and the price on the bag overlay should match the product price on the PDP

    # Step 3
    When I click the bag icon
    Then I should be navigated to the Bag page and the product and price on the Bag page should match the PDP

    # Step 4
    When I click the Checkout button
    Then I should be navigated to the Checkout page and the product and price on the Checkout page should match the PDP

    # Step 5
    When I enter delivery details: firstName, lastName, address, phoneNumber
    Then I should see the delivery summary with the correct details

    # Step 6
    When I enter payment details: ccNo, month, year, CVV
    And I click the pay button
    Then I should see the order confirmation with the order number