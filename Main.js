
// implement unclickable buttons when sorting is operating;
// FIX THE NUMBER SWAPING;

const scrSize = window.screen.height -300;
const algoTracker = [
   ['bubble', false],
   ['merge', false],
   ['heap', false],
   ['quick',false]
]
const algoDescriptions = {
    merge: `
    <h2>Merge Sort Time Complexity</h2><br>
        Best: Ω(n log(n))<br><br> Average: θ(n log(n))<br><br> Worst: O(n log(n))
    `,
    bubble: `
        <h2>Bubble Sort Time Complexity</h2>
        Best: Ω(n)<br><br> Average: θ(n^2)<br><br> Worst: O(n^2)
    `,
    quick: `
    <h2>Quick Sort Time Complexity</h2>
    Best: Ω(n log(n))<br><br> Average:θ(n log(n))<br><br> Worst: O(n^2)
    `,
    heap: `
    <h2>Heap Sort Time Complexity</h2>
    Best: Ω(n)<br><br> Average: θ(n^2)<br><br> Worst: O(n^2)
    `
}
// This function calculate the right velocity it should have;
function getVelocity(multiplier = 3) {
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
    resetDescription(str);
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
function resetDescription(algorithm) {
    const getDescritionBox = document.getElementById('description');
    getDescritionBox.innerHTML = algoDescriptions[algorithm];
}


function cleanTracker() {
    for (let i = 0; i < algoTracker.length; i++) {
        if (algoTracker[i][1] === true) {
            algoTracker[i][1] = false;
            let algo = algoTracker[i][0];
            let grabButton = document.getElementById(algo);
            grabButton.style.fontSize = '1.3rem';
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
    bubble() {
        const animations = doBubble(this.array);
        for (let i = 0 ; i < animations.length; i++) {
            const bars = document.getElementsByClassName('bar');
            if (animations[i].length === 2) {
                //DONT SWAP JUST COLOR
                const [bar1Idx, bar2Idx] = animations[i];
                let bar1 = bars[bar1Idx].style;
                let bar2 = bars[bar2Idx].style;
                setTimeout(()=> {
                      bar1.backgroundColor = 'pink';
                      bar2.backgroundColor = 'pink';
                }, i * getVelocity())
              
            } else if (animations[i].length === 3) {
                const [bar1Idx, bar2Idx] = animations[i];
                let bar1 = bars[bar1Idx].style;
                let bar2 = bars[bar2Idx].style;
                setTimeout(()=> {
                      bar1.backgroundColor = 'teal';
                      bar2.backgroundColor = 'teal';
                }, i * getVelocity())
              
            } else if (animations[i].length === 4) {
                const [bar1Idx, bar2Idx] = animations[i];
                let bar1 = bars[bar1Idx].style;
                let bar2 = bars[bar2Idx].style;
                setTimeout(()=> {
                      bar1.backgroundColor = 'pink';
                      bar2.backgroundColor = 'pink';
                }, i * getVelocity())
              
            }  else if (animations[i].length === 5) {
                const [bar1Idx, bar2Idx] = animations[i];
                let bar1 = bars[bar1Idx].style;
                let bar2 = bars[bar2Idx].style;
                setTimeout(()=> {
                      bar1.backgroundColor = 'red';
                      bar2.backgroundColor = 'red';
                }, i * getVelocity())
              

            } else if (animations[i].length === 6) {
                 const [bar1Idx, bar2Idx, height1, height2] = animations[i];
                        let bar1 = bars[bar1Idx].style;
                        let bar2 = bars[bar2Idx].style;
                        setTimeout(()=> {
                            bar1.height = `${height2}px`
                            bar2.height = `${height1}px`;
                        }, i * getVelocity()) 
            } else if (animations[i].length === 7) {
                const [bar1Idx, bar2Idx] = animations[i];
                let bar1 = bars[bar1Idx].style;
                let bar2 = bars[bar2Idx].style;
                setTimeout(()=> {
                      bar1.backgroundColor = 'teal';
                      bar2.backgroundColor = 'teal';
                }, i * getVelocity())
            } 
            else if (animations[i].length === 1) {
                const [lastBarIdx] = animations[i];
                const barLast = bars[lastBarIdx].style;
                setTimeout(()=> {
                    barLast.backgroundColor = 'turquoise';
                },i * getVelocity());
            } 
        }
        
        // FIND OUT WHY MAIN ARRAY CHANGES WHEN THIS FUNCTION IS CALLED:
       
    }

    merge() {
      const animations = mergeSort(this.array);
        
      for (let i = 0; i < animations.length; i++) {
          const bars = document.getElementsByClassName('bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i]
            const barOneStyle = bars[barOneIdx].style;
            const barTwoStyle = bars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(()=> {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * getVelocity())
          } else {
            setTimeout(()=> {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = bars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`
            }, i * getVelocity());
          }
      }
    }
    quick() {
      const animations = quickSort(this.array);
      for (let i = 0; i < animations.length; i++) {
          const bars = document.getElementsByClassName('bar');
        if (animations[i].length === 3) {
            const [pivIdx, bar1Idx, bar2Idx] = animations[i];
            // Color the pivot and left and right
            setTimeout(()=> {
                bars[pivIdx].style.backgroundColor = 'yellow';
                bars[bar1Idx].style.backgroundColor = 'pink';
                bars[bar2Idx].style.backgroundColor = 'pink';
            }, i * getVelocity())
           
        } else if (animations[i].length === 4) {
            const [pivIdx, bar1Idx, bar2Idx] = animations[i];
            setTimeout(()=> {
                bars[bar1Idx].style.backgroundColor = 'teal'; 
                // Uncolor left back to teal
                // bars[bar2Idx].style.backgroundColor = 'teal';
            }, i * getVelocity())
        } else if (animations[9].length === 5) {
            const [pivIdx, bar1Idx, bar2Idx] = animations[i];
            setTimeout(()=> {
                // bars[bar1Idx].style.backgroundColor = 'teal'; 
                // color left++ to pink 
                bars[bar1Idx].style.backgroundColor = 'pink';
            }, i * getVelocity())
        }  else if (animations[i].length === 6) {
            const [pivIdx, bar1Idx, bar2Idx] = animations[i];
            setTimeout(()=> {
                // bars[bar1Idx].style.backgroundColor = 'teal'; 
                // uncolor right; 
                bars[bar2Idx].style.backgroundColor = 'teal';
            }, i * getVelocity())

        } else if (animations[i].length === 7) {
            const [pivIdx, bar1Idx, bar2Idx] = animations[i];
            setTimeout(()=> {
                // bars[bar1Idx].style.backgroundColor = 'teal'; 
                // color right++ to pink
                bars[bar2Idx].style.backgroundColor = 'pink';
            }, i * getVelocity())
        } 
        else if (animations[i].length === 8) {
            // Color them to red
            setTimeout(()=> {
                const [bar1Idx, bar2Idx, height1, height2] = animations[i];
                const bar1 = bars[bar1Idx].style;
                const bar2 = bars[bar2Idx].style;
                bar1.backgroundColor = 'pink';
                bar2.backgroundColor = 'pink';
                
            }, i * getVelocity() );
       
        }  else if (animations[i].length === 9) {
            setTimeout(()=> {
                const [bar1Idx, bar2Idx, height1, height2] = animations[i];
                const bar1 = bars[bar1Idx].style;
                const bar2 = bars[bar2Idx].style;
                bar1.backgroundColor = 'red';
                bar2.backgroundColor = 'red';
                
            }, i * getVelocity() );
        } else if (animations[i].length === 10) {
            setTimeout(()=> {
                const [bar1Idx, bar2Idx, height1, height2] = animations[i];
                const bar1 = bars[bar1Idx].style;
                const bar2 = bars[bar2Idx].style;
                bar1.height = `${height2}px`;
                bar2.height = `${height1}px`;
                
            }, i * getVelocity() );
        } else if (animations[i].length === 11) {
            setTimeout(()=> {
                const [bar1Idx, bar2Idx, height1, height2] = animations[i];
                const bar1 = bars[bar1Idx].style;
                const bar2 = bars[bar2Idx].style;
                bar1.backgroundColor = 'teal';
                bar2.backgroundColor = 'teal';
                
            }, i * getVelocity() );
        } else if (animations[i].length === 2) {
            setTimeout(()=> {
                const [pivIdx, rightIdx] = animations[i];
                const pivotBar = bars[pivIdx].style;
                const rightBar = bars[rightIdx].style;
                pivotBar.backgroundColor = 'teal';
                rightBar.backgroundColor = 'turquoise';
            }, i * getVelocity())
        } else if (animations[i].length === 1) {
            // FIX THIS
            setTimeout(()=> {
                const [leftSubArrIdx, ] = animations[i];
                const barLeft = bars[leftSubArrIdx].style;
                barLeft.backgroundColor = 'turquoise'
                
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
               
                div.style.width = divs[1];
                div.style.margin = divs[2];
                div.style.backgroundColor = 'teal';
                if (divs[0] < 45) {
                    let paragraph = document.createElement('p');
                    
                    paragraph.style.color = 'white';
                    paragraph.style.fontWeight = 1000;
                    // divout will be inline block so bars could be next to each other.
                    // div will be pushed to divout and flex could be used to position the number to the bottom;
                    let divout = document.createElement('div');
                    divout.style.display = 'inline-block';
                    paragraph.innerHTML = `${number}`;
                    paragraph.style.margin = '0 auto';
                    div.appendChild(paragraph);
                    div.style.display = 'flex';
                    div.style.alignItems = 'flex-end';
                    div.style.position = 'relative';
                    div.style.bottom = '0';
                    divout.style.textAlign = 'center';
                  
                    divout.appendChild(div);
                    divBox.appendChild(divout);
                    continue
                }
                divBox.appendChild(div);
                
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
                
                div.style.width = divs[1];
                div.style.margin = divs[2];
                div.style.backgroundColor = 'teal';
                if (divs[0] < 45) {
                    let paragraph = document.createElement('p');
                    paragraph.style.color = 'white';
                    paragraph.style.fontWeight = 1000;
                    // divout will be inline block so bars could be next to each other.
                    // div will be pushed to divout and flex could be used to position the number to the bottom;
                    let divout = document.createElement('div');
                    divout.style.display = 'inline-block';
                    paragraph.innerHTML = `${number}`;
                    paragraph.style.margin = '0 auto';
                    div.appendChild(paragraph);
                    div.style.display = 'flex';
                    div.style.alignItems = 'flex-end';
                    div.style.position = 'relative';
                    div.style.bottom = '0';
                    divout.style.textAlign = 'center';
                  
                    divout.appendChild(div);
                    divBox.appendChild(divout);
                    continue
                }
                divBox.appendChild(div);
                
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


//Heap Sort Code;
function heapSort(array) {
    const animation = [];
    buildMaxHeap(array, animation);
      for (let endIdx= array.length-1; endIdx >= 1; endIdx--)  {
          animation.push([0, endIdx]);
          animation.push([0,endIdx,1,1,1,1]);
          animation.push([0,endIdx, array[0], array[endIdx],1,1,1]);
          animation.push([0, endIdx,1,1,1,1,1,1]);
          swap(array, endIdx, 0);
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

              swap(heap, currentIdx, idxToSwap);
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

  
// Quick Sort Code;

function quickSort(array) {
    const animation  = [];
	quickSortHelper(array, 0, array.length-1, animation);
	return animation;
}

function quickSortHelper(array, startIdx, endIdx, animation) {
    // we want to color arrays of length 1 turquoise because they are already sorted.
	if (startIdx >= endIdx){
        animation.push([startIdx])
        return;
    }
	let pivotIdx = startIdx;
	let left = startIdx + 1;
	let right = endIdx;
// If left or right sub array is length 1 is already sorted
	while (right >= left) {
        animation.push([pivotIdx, left, right]);
       
		if (array[left] > array[pivotIdx] && array[right] < array[pivotIdx]) {
            // We push four times
            // First time to color it pink;
            // second time to color it red;
            // third time to swap;
            // forth tim to uncolor them;
            animation.push([left, right, array[left], array[right],1,1,1,1]);
            animation.push([left, right, array[left], array[right],1,1,1,1,'red']);
            animation.push([left, right, array[left], array[right],1,1,1,1, 'red', 'swap']);
            animation.push([left, right, array[left], array[right],1,1,1,1, 'red', 'swap', 'uncolor']);

            swap(array, left, right);
		} 
		if (array[left] <= array[pivotIdx]) {
            //We push two times;
            // first time to uncolor the left bar;
            // second time to color the next left bar;
            animation.push([pivotIdx, left, right, 'uncolor left']);
			left++;
            animation.push([pivotIdx, left, right, 'uncolor left', 'color left++']);
		} 
		if (array[right] >= array[pivotIdx]) {
             //We push two times;
            // first time to uncolor the right bar;
            // second time to color the next right bar;
            animation.push([pivotIdx, left, right, 1,1, 'uncolor right']);
			right--;
            animation.push([pivotIdx, left, right, 1,1, 'uncolor right', 'color right--']);
		} 
	}
    // last swap color turqoise the pivot
    // We push four times;
    // First time to color pink the two bars;
    // Second time to color them red;
    // third time to swap them;
    // forth time to color the pivot to turquoise (already sorted)
 animation.push([pivotIdx, right, array[pivotIdx], array[right],1,1,1,1]); 
 animation.push([pivotIdx, right, array[pivotIdx], array[right],1,1,1,1, 'red']);   
 animation.push([pivotIdx, right, array[pivotIdx], array[right],1,1,1,1, 'red', 'swap']);
 animation.push([pivotIdx, right]);
    //push to uncolor right and color turqoise pivot  
    swap(array, pivotIdx, right);
// If left or right sub array is length 1 it is already sorted
	let leftSubArrayIsSmaller = right - 1 - startIdx < endIdx - (right + 1);
    
	if (leftSubArrayIsSmaller) {
		quickSortHelper(array, startIdx, right - 1, animation);
		quickSortHelper(array, right + 1, endIdx, animation);
	} else {
		quickSortHelper(array, right + 1, endIdx, animation);
		quickSortHelper(array, startIdx, right - 1, animation);
	}
}
function swap(array, idx, idx2) {
	let temp = array[idx];
	array[idx] = array[idx2];
	array[idx2] = temp;
}

// MergeSort Code + swap; 
function mergeSort(array) {
    const animations  = [];
    if (array.length <= 1) return array;
      let auxiliaryArray = array.slice();
      mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
      return animations;
  }
  function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
      if (startIndex === endIndex) return;
      let middleIdx = Math.floor((startIndex + endIndex) /2);
      mergeSortHelper(auxiliaryArray, startIndex, middleIdx, mainArray, animations);
      mergeSortHelper(auxiliaryArray, middleIdx + 1, endIndex, mainArray, animations);
      doMerge(mainArray, startIndex, middleIdx, endIndex, auxiliaryArray, animations)
 }
function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
    ) 
    {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx){
        
      animations.push([i, j])
      animations.push([i, j])
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
          animations.push([k, auxiliaryArray[i]]);
          mainArray[k++] = auxiliaryArray[i++];

      } else {
          animations.push([k, auxiliaryArray[j]]);
          mainArray[k++] = auxiliaryArray[j++]
      }
    }
    while (i <= middleIdx) {
        
        animations.push([i,i])
        animations.push([i,i])
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++]
};
}

// BubbleSort Code + swap;

function doBubble(array) {
	let sorted = true;
    let animations = [];
    let len = array.length-1;
	while (sorted) {
		sorted = false;
		for (let i = 0 ; i < len; i++) {
          
			if (array[i] > array[i+1]) {
                //length 4 need color and swap
                animations.push([i, i+1, array[i], array[i+1]])
                animations.push([i, i+1, array[i], array[i+1], 'red'])
                animations.push([i, i+1, array[i], array[i+1], 'red', 'swap'])
                animations.push([i, i+1, array[i], array[i+1], 'red', 'swap', 'teal'])
                swapBubble(array, i, i+1);
				sorted = true;
			}  else {
                animations.push([i, i+1]);
                animations.push([i, i+1, 'backToTeal'])
            }

		}
        animations.push([len])
        len = len-1;
	}
    // Last for loop to color all the ones that have been left;
    for (let i = 0; i < array.length-1; i++) {
        animations.push([i]);
    }
	return animations
}

function swapBubble (array, idx, idx2) {
    let temp = array[idx];
    array[idx] = array[idx2];
    array[idx2] = temp; 
}
