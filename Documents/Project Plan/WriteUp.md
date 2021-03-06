# Goals and Deliverables

For goals and deliverables, we came up with one general goal that has one deliverable with three major components. 

## General Goal

Nowadays there are many JavaScript libraries for accomplishing just about anything you want on the web, but it’s 
not easy for non-technical users with no programming experience to harness the power of these libraries. In our 
project, we aim to create a Makecode.com platform(https://makecode.com/) based web interface to enable users’ 
abilities to construct a simple program by simply assembling code blocks. 

## Traffic simulation

To begin with, our goal is to stimulate non-technical users to learn and manipulate code by engaging in a dynamic
and interactive traffic map navigation as a simulator using the existing PXT environment. More specifically, we 
are required to design and implement a web program under the existing PXT environment, using a traffic map navigation 
as a simulator. The web program is aimed for helping non-experienced users to learn how to code in javascript by building
code blocks in the PXT environment. 

*tball comment: I think that the high-level goal would be more domain-specific - that is, instead of learn to code in JavaScript,
the goal is to learn how different traffic rules can affect traffic flow through the city*

## Short Term tasks

Moreover, we defined three specific short term tasks as deliverables.

* First, we need to set up the traffic rules for controlling traffic flows on the map. The traffic map is designed to 
simulate real life traffic situation on the map. We define the traffic rules according to general traffic knowledge. 
Users can set up the traffic rules using code block commands and verify if the executed navigation route by the 
transportation element will match in the simulator. Examples of rules are: traffic lights set up on designated crossroads - 
controls direction, duration, and location of the lights; pedestrians set up on designated roads.

* Second, we will build a 3 x 3 traffic block(subject to change) with working algorithms as a prototype. 
Before we start coding, we need to design and sketch out a 3 x 3 traffic block which contains 9 crossroads total 
on the map (subject to change). Each crossroad on the map will have a traffic light to control the traffic rule 
of that crossroad. Each traffic light will have a specific set of options for traffic rules, there are four options 
total, red light (stop), green light (go forward), turn-left green light (turn left), turn-right green light (turn right), 
combined with each road’s one-way direction, we will have a set of combinations of traffic light rules.

* Third, we need to locate a map/graph library which constructs the simulator graph that will accurately display the 
map for user interaction. This week we will start off with smaller map region(a 3*3 block) and gradually build on road
map diversity which mimics the map in real world.

*tball comment: as I mentioned before, perhaps you could just start with an HTML Table to represent the roads*

*tball comment: another thing to consider is that each traffic element (car, stop light) essentially will have its own 
program; put another way, all the elements are executing concurrently; it's going to be important to consider this and
probably have your design reflect this. For example, you can have a top-level block for each element and then put the
code for that element under the block. PXT has a nice to way to execute the code in such blocks concurrently*



## Brainstorms 

Last week, we brainstormed domain specific ideas for our project and came up with detailed proposals to share with client. 
One idea was a traffic light simulator that allow users to control traffic elements(such as cars and traffic lights) and 
create small program that mimic real traffic situation. The other one is a doctor’s work flow diagram creation based on each patient. Each proposal clearly stated its objective, specification and simulation outcome. 

On friday we finalized our project topic to a map based traffic control simulator during client meeting. During the meeting 
we further explored and developed more detailed ideas based on original proposal, which can be used in later project development.
This week we will be holding off on actually code, and will be working on building a 3 * 3 block traffic map prototype, with basic traffic rules enabled. Our first program is expected to be simple - a 3 * 3 block one way road map with 9 traffic lights. Each traffic
light contains four options total, red light (stop), green light (go forward), turn-left green light (turn left), turn-right green 
light (turn right), combined with each road’s one-way direction, we will have a set of combinations of traffic light rules. Each 
traffic light can switch light every 30 seconds, which we will write pseudocode for this smaller program. We will also focus on 
finding appropriate javascript libraries for future use.

For this week’s task, all team member will contribute to all tasks, while each individual has a focus - yuanmeng will focus on pseudocode creation; Xiaoxi and Hannah will focus on javascript library research. Please also refer to project plan spreadsheet for division of labor.

## Challenges and Risks

To begin with, as most of our team members do not come with CS background, the biggest challenge for us would be a relatively 
long process of code learning and implementing. One of the strategies for this situation would be to start learning basic 
content of required languages such as javascript/typescript before we start coding. Also, the member who had coding
experiences should help others on code learning and implementing by explaining the code structure and algorithms in the project.  

Besides, requirements may be late or incomplete. 

In our case, first, the requirements of confirming the set of combinations of traffic rules may be late-confirmed or incomplete. 
It is likely to happen as if the number of the combinations are so large that we cannot list out all of the cases in a short 
amount of time. This problem will cause a major impact as if we don’t find out all the cases, we cannot move on to start 
implement the web app with the algorithms based on the traffic rules. We came up with two strategies for mitigation,
the first one would be establish hard “freeze date” to force us to confirm the combination of traffic rules in a specific time; 
the other one would be that to reduce the scope to come up with a complete set of traffic rules with less degree of complexity 
as priority.

Second, the requirements of presenting a prototype may be late or incomplete. It is likely to happen when we are building 
a 3 x 3 traffic block with working algorithms, because coming up the algorithms interfering with a set of combinations of 
traffic rules may take longer than we expect. The impact of not finishing the prototype in time would be moderate because 
it plays a role as a draft of our traffic rules, we can still keep working on it when we start to implement the web program. 
However, we still work out two strategies in response to this situation. The first one would be establishing hard “freeze date”; 
while the other one would be breaking down the algorithms for the set of combinations to singulate traffic light’s algorithms 
then combine them together.

Moreover, tools are immature or have steep learning curve.

In our case, first, the open source libraries we locate online may take us longer than we expect to learn or get familiar with. 
It might happen because different libraries have different frameworks or template for specific tasks, and for each different 
libraries, we will have to learn about the code from beginning. It may cause a major impact if this particular library is required 
to implement some important parts of our project, for example, graph design, our project may be postponed because of the delay caused 
by learning the libraries. Also, we come up with two strategies to deal with this situation. Firstly, establish cutoff date for 
new tools; secondly, use tools that are well known by team.

## Timeline

We have developed a major timeline to follow throughout the semester for the project. Please refer to project plan spreadsheet 
for detailed information.
