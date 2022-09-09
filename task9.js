
var form=document.getElementById('addForm')
var itemList=document.getElementById('items')


form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault()
    

//to get the input value
var newItem=document.getElementById('item').value;
var desc=document.getElementById('description').value;
//create a new li element
var li=document.createElement('li')
//add class
li.className='list-group-item'
//add text node with input value
li.appendChild(document.createTextNode(newItem))
li.appendChild(document.createTextNode(desc))

 // Create del button element and edit button
var deleteBtn = document.createElement('delete');
var createBtn=document.createElement('edit');

 // Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
createBtn.className='btn btn-danger btn-sm float-right edit';

 // Append text node
deleteBtn.appendChild(document.createTextNode('delete'));
createBtn.appendChild(document.createTextNode('edit'));

 // Append button to li
li.appendChild(deleteBtn);
li.appendChild(createBtn)


//append li to list
itemList.append(li)
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

  
// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  