// give a singly linked list, group all odd nodes together followed by the even nodes.

// do in place with O(1) space, o(n) time



/*
1>2>3>4>5
1>3>5>2>4

1>3>2>4>5

2>1>3>5>6>4>7
2>3>6>7>1>5>4

node.val, node.next

iterate through list the list
counter to keep track of even or odd
if node is odd,
    grab the next of the next node and assign to currnode.next
if node is even



*/

class Node {
    constructor(value){
        this.next = null
        this.value = value
    }

}


const evenOddList = (list)=> {

    let counter = 1
    let currentNode = list
    

//     1>2>3>4>5
// 1>3>5>2>4

// 1 ,3 

    while (currentNode.next){

        if (counter % 2 === 1){
            let nextOdd = node.next.next
            let nextEven = node.next
            currentNode.next = nextOdd 
            node.next = node.next.next
            counter += 1
            
        } else {
            if(evenStart.val){
                eventStart.next = 
            }
        }

    }


}

// 1>2>3>4>5
// 1>3>5>2>4


const oddEvenList = (head) => {
    if(!head || !head.next) return head 

    let odd = head // first node
    let even = head.next // second node
    while(odd.next && odd.next.next){
        let tempEven = odd.next // assigns the even to a temp variable
        odd.next = odd.next.next // connects the even (odd.next) to the next even value
        odd = odd.next // assigns odd to the next odd value since odd.next is an even value
        tempEven.next = odd.next  // adds the next even to the last even value
    }
    odd.next = even // connects the last odd to the even link chain
    return head
}