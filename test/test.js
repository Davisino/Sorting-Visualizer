
const scrSize = window.screen.height -300;
const algoTracker = [
   ['bubble', false],
   ['merge', false],
   ['heap', false],
   ['quick',false]
]
// This function calculate the right velocity it should have;
function getVelocity(multiplier = 2) {
    let divs = Number(document.getElementById('changeDivs').value)
    if (divs >= 260) {
        return 1 * multiplier
    } else if (divs >= 210) {
        return 2 * multiplier
    } else if (divs >= 166) {
        return 5 * multiplier
    } else if (divs >= 136) {
        return 8 * multiplier
    } else if (divs >= 120) {
        return 10 * multiplier
    } else if (divs >= 79) {
        return 12 * multiplier
    } else if (divs >= 63) {
        return 15 * multiplier
    } else if (divs >= 50) {
        return 20 * multiplier
    } else if (divs >= 45) {
        return 25 * multiplier
    } else if (divs >= 35) {
        return 30 * multiplier
    } else if (divs >= 29) {
        return 40* multiplier
    } else if (divs >= 25) {
        return 50* multiplier
    } else if (divs >= 23) {
        return 60 * multiplier
    } else if (divs >= 18) {
        return 70 * multiplier
    } else if (divs >= 15) {
        return 80 * multiplier
    } else if (divs >= 13) {
        return 90 * multiplier
    } else if (divs >= 5) {
        return 100 * multiplier
    }
}
// FIST MAKE THE RANGE WORK ACCORDING TO THE INPUT > DEVELOP THE ALGORITHMN
function getDivs() {
    let len = Number(document.getElementById('changeDivs').value);
     let width = calculateWidth(len);
     let margin = calculateMargin(len);
    return [len, width, margin];
}

function calculateWidth(divs) {
    if (divs >= 260) {
        return `2px`
    } else if (divs >= 210) {
        return `3px`
    } else if (divs >= 166) {
        return `4px`
    } else if (divs >= 136) {
        return `5px`
    } else if (divs >= 120) {
        return `7px`
    } else if (divs >= 79) {
        return `8px`
    } else if (divs >= 63) {
        return `13px`
    } else if (divs >= 50) {
        return `17px`
    } else if (divs >= 45) {
        return `20px`
    } else if (divs >= 35) {
        return `25px`
    } else if (divs >= 29) {
        return `28px`
    } else if (divs >= 25) {
        return `35px`
    } else if (divs >= 23) {
        return `43px`
    } else if (divs >= 18) {
        return `44px`
    } else if (divs >= 15) {
        return `60px`
    } else if (divs >= 13) {
        return `64px`
    } else if (divs >= 10) {
        return `80px`
    }
}
function calculateMargin(divs) {
    if (divs >= 260) {
        return `1px`
    } else if (divs >= 210) {
        return `1px`
    } else if (divs >= 166) {
        return `1px`
    } else if (divs >= 136) {
        return `1px`
    } else if (divs >= 120) {
        return `1px`
    } else if (divs >= 79) {
        return `1px`
    } else if (divs >= 63) {
        return `2px`
    } else if (divs >= 50) {
        return `2px`
    } else if (divs >= 45) {
        return `2px`
    } else if (divs >= 35) {
        return `3px`
    } else if (divs >= 29) {
        return `4px`
    } else if (divs >= 25) {
        return `5px`
    } else if (divs >= 18) {
        return `5px`
    } else if (divs >= 15) {
        return `8px`
    } else if (divs >= 13) {
        return `8px`
    } else if (divs >= 10) {
        return `10px`
    }

}
// BUTTON STUFF 
function getTracker(str) {
    cleanTracker();
    for (let i = 0; i < algoTracker.length; i++) {
        if (algoTracker[i][0] === str) {
            algoTracker[i][1] = true;
        }
    }
    let gbutton = document.getElementById(str);
    gbutton.style.fontSize = 'x-large';
    gbutton.style.backgroundColor = 'teal ';
}
function cleanTracker() {
    for (let i = 0; i < algoTracker.length; i++) {
        if (algoTracker[i][1] === true) {
            algoTracker[i][1] = false;
            let algo = algoTracker[i][0];
            let grabButton = document.getElementById(algo);
            grabButton.style.fontSize = 'large';
            grabButton.style.backgroundColor = 'rgb(65, 162, 201)';
        }
    }
}

class SortingVisualizer {
    constructor() {
        this.array = [];
    }
    heap() {
        const animations = heapSort(this.array);
        
       for (let i = 0 ; i < animations.length; i++) {
           const bars = document.getElementsByClassName('bar');
           if (animations[i].length == 1) {
            setTimeout(()=> {
                const [idx1, ] = animations[i];
                const bar1 = bars[idx1].style;
            
                bar1.backgroundColor = 'turquoise';
           
            }, i * getVelocity())
        } else if (animations[i].length == 2) {
            setTimeout(()=> {
                const [idx1, idx2] = animations[i];
                const bar1 = bars[idx1].style;
                const bar2 = bars[idx2].style;
                bar1.backgroundColor = 'pink';
                bar2.backgroundColor = 'pink';
            }, i * getVelocity())
        } else if (animations[i].length === 3){
            setTimeout(()=> {
                const [idx1, idx2, idx3] = animations[i];
                const bar1 = bars[idx1].style;
                const bar2 = bars[idx2].style;
                const bar3 = bars[idx3].style;
                bar1.backgroundColor = 'pink';
                bar2.backgroundColor = 'pink';
                bar3.backgroundColor = 'pink';
            }, i * getVelocity())
        } else if (animations[i].length === 4) {
            setTimeout(()=> {
                const [idx1, idx2] = animations[i];
                const bar1 = bars[idx1].style;
                const bar2 = bars[idx2].style;
                bar1.backgroundColor = 'teal';
                bar2.backgroundColor = 'teal';
            }, i * getVelocity())
        } else if (animations[i].length === 5) {
            setTimeout(()=> {
                const [idx1, idx2, idx3] = animations[i];
                const bar1 = bars[idx1].style;
                const bar2 = bars[idx2].style;
                const bar3 = bars[idx3].style;
                bar1.backgroundColor = 'teal';
                bar2.backgroundColor = 'teal';
                bar3.backgroundColor = 'teal';
            }, i * getVelocity())
        } else if (animations[i].length === 6) {
            setTimeout(()=> {
                const [idx1, idx2] = animations[i];
                const bar1 = bars[idx1].style;
                const bar2 = bars[idx2].style;
            
                bar1.backgroundColor = 'red';
                bar2.backgroundColor = 'red';
             
            }, i * getVelocity())
        } else if (animations[i].length === 7) {
            setTimeout(()=> {
                const [idx1, idx2, h1, h2] = animations[i];
                const bar1 = bars[idx1].style;
                const bar2 = bars[idx2].style;
                bar1.height = `${h2}px`;
                bar2.height = `${h1}px`;
            }, i * getVelocity())
        }else if (animations[i].length === 8) {
            setTimeout(()=> {
                const [idx1, idx2] = animations[i];
                const bar1 = bars[idx1].style;
                const bar2 = bars[idx2].style;
                bar2.backgroundColor = 'turquoise';
                bar1.backgroundColor = 'teal';
            }, i * getVelocity())
        }
       } 
      
    }
   
  
    generateDivs() {
        if (this.array.length === 0) {
            let divBox = document.getElementById('divs-box');
            let divs = getDivs();
            for (let i = 0; i < divs[0]; i++) {
                let div = document.createElement('div');
                div.id = `${i}`;
                div.className = `bar`
                let number = randomNumber(10, scrSize)
                div.style.height = `${number}px`;
                this.array.push(number);
                divBox.appendChild(div);
                div.style.width = divs[1];
                div.style.margin = divs[2];
                div.style.backgroundColor = 'teal';
                document.getElementById('range').innerHTML = `${getDivs()}`
            }
          return divBox;
        } else {
            let divBox = document.getElementById('divs-box');
            this.array = [];
            divBox.innerHTML = '';
            let divs = getDivs();
            for (let i = 0; i < divs[0]; i++) {
                let div = document.createElement('div');
                div.id = `${i}`;
                div.className = `bar`
                let number = randomNumber(10, scrSize)
                div.style.height = `${number}px`;
                this.array.push(number);
                divBox.appendChild(div);
                div.style.width = divs[1];
                div.style.margin = divs[2];
                div.style.backgroundColor = 'teal';
                document.getElementById('range').innerHTML = `${getDivs()}`
            }
          return divBox
        }
        
    };
}
const main = new SortingVisualizer();
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

// This function will find which algorithm is selected and run it.
function runAlgoSelected() {
    let algo;
    for (let i = 0; i < algoTracker.length; i++) {
        if (algoTracker[i][1] === true) {
            algo = algoTracker[i][0]
        }
    }
    if (!algo) {
        alert('Select an Algorithm first')
    } else {
       if (algo === 'quick') {
           return main.quick();
       } else if (algo === 'bubble') {
           return main.bubble();
       } else if (algo === 'merge') {
          return  main.merge();
       } else if (algo === 'heap') {
           return main.heap();
       }
    }
}
function heapSort(array) {
    const animation = [];
    buildMaxHeap(array, animation);
      for (let endIdx= array.length-1; endIdx >= 1; endIdx--)  {
          animation.push([0, endIdx]);
          animation.push([0,endIdx,1,1,1,1]);
          animation.push([0,endIdx, array[0], array[endIdx],1,1,1]);
          animation.push([0, endIdx,1,1,1,1,1,1]);
          swap(0, endIdx, array);
          siftDown(0, endIdx-1, array, animation);
      }
      animation.push([0])
      return animation;
  }

  function buildMaxHeap(array, animation) {
      let firstParentIdx = Math.floor((array.length-1)/2)
      for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
          siftDown(currentIdx, array.length-1, array, animation);
      }
  }
  function siftDown(currentIdx, endIdx, heap, animation) {
      let leftChildIdx = (2 * currentIdx) + 1;
      while (leftChildIdx <= endIdx) {
          let rightChildIdx = currentIdx * 2 + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
          let idxToSwap;
          let NumberOfItemsPushed;
            if (rightChildIdx === -1) {
                // color pink
                animation.push([currentIdx, leftChildIdx]);
                NumberOfItemsPushed = 2;
            } else {
                // color pink
                animation.push([currentIdx, leftChildIdx, rightChildIdx]);
                NumberOfItemsPushed = 3;
            }

          if (rightChildIdx > -1 && heap[rightChildIdx] > heap[leftChildIdx]) { 
              idxToSwap = rightChildIdx;
       
          } else {
              idxToSwap = leftChildIdx;
              
          }

          if (heap[idxToSwap] > heap[currentIdx]) {
            //   red
              animation.push([idxToSwap, currentIdx, 1,1,1,1]);
            //   swap
              animation.push([idxToSwap, currentIdx, heap[idxToSwap], heap[currentIdx], 1,1,1]);
            //   red
              animation.push([idxToSwap, currentIdx, 1,1,1,1]);
            //   uncolor
             if (NumberOfItemsPushed === 2) {
            //  uncolor currentIdx
                
                 animation.push([leftChildIdx, currentIdx,1,1])
              } else {
                //  uncolor the tree
               
                animation.push([leftChildIdx, rightChildIdx, currentIdx,1,1])
             }

              swap(currentIdx, idxToSwap, heap);
              currentIdx = idxToSwap;
              leftChildIdx = currentIdx * 2 + 1;
          } else {
            // uncolor the two
            if (rightChildIdx === -1) {
               
                animation.push([currentIdx, leftChildIdx, 1,1]);
            } else {
                // uncolor the three
               
                animation.push([currentIdx, leftChildIdx, rightChildIdx,1,1]);
            }
        
              break;
          }
      }
  }
  
  function swap(i, j, array) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  
  
