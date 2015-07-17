BDD vs TDD :-

The Behavioural Driven Development comes from TDD but still there are few key differences between them.
BDD focuses on the behavioural aspect of the system rather than the implementation aspect of the system that TDD focuses on.
BDD gives a clearer understanding as to what the system should do from the perspective of the developer and the customer. TDD only gives the developer an understanding of what the system should do.
BDD allows both the developer and the customer to work together to on requirements analysis that is contained within the source code of the system.
Main advantage of BDD is that the tests are written in plain english...So customer can review test cases, give feedback and even write the test cases of his choice.

In TDD code is machine understandable =>

class UserTest < Test::Unit::TestCase
  def test_name_set
    user = User.new "Audrey"
    assert_equal(user.name, "Audrey")
  end
end

In BDD code is human understandable =>

describe User do
  it "lets me assign a name" do
    user = User.new "Paul"
    user.name.should == "Paul"
  end
end

============================================================================================

Jasmine :-
Jasmine has almost everything I need to write unit tests. 
It has a very readable API and a simple mocking library (spies) already built in. 
Mocking in JavaScript comes in the form of spies. 
You can also create a spy if you do not have an existing method you want to spy on. 
Jasmine spies cover almost everything one need for mocking so in many situations you won't need to use Sinon if you are using Jasmine, but you can use the two together if you'd like.

============================================================================================

Mocha
Mocha does not have a built in assertion librarybut it a hugely powerful library. Mocha is not so 'beginner friendly'. 
It will detect your test files, and run them, giving you output in the terminal.
There are several options though for both Node and the browser: Chai, should.js, expect.js, and better-assert. 
Because none of these assertion libraries come with Mocha, this is another thing you will need to load into your setup. 
Mocha does not come with a mocking/spy library unlike Jasmine. 
Instead you will need to load in Sinon.js into your test harness. 
Sinon is a very powerful mocking library and is the equivalent of Jasmine spies with a little more. 

============================================================================================

QUnit
QUnit is the testing library of choice for the jQuery project, and is designed to enable easy testing of DOM manipulation, which makes it unique in this roundup. 
While other libraries, including Jasmine, can be extended with plug-ins to make DOM testing easier, QUnit comes with it built in.
QUnit runs its tests in the browser but doesn't come with any HTML file; you've got to set that up yourself.

