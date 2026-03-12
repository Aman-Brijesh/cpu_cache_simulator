# CPU Cache Simulator

This project was made for me to brush up on my web development skills while trying to learn how cache works

## Features

* **Memory Address Translation:** Accepts memory address inputs ranging from 0 to 255. 
* **Binary Conversion:** Automatically translates the integer input into an 8-bit binary string for processing.
* **Hit/Miss Detection:** Simulates cache lookup and determines cache "Hits" and "Misses," which are actively logged to the browser console.
* **Persistent State:** Saves the cache state using the browser's `localStorage` so data persists when navigating between different block views.
* **Block Visualization:** Provides dedicated, individual HTML pages to view the stored tag for each of the four cache blocks.

## Cache Specifications

The JavaScript logic models a specific direct-mapped cache configuration:

* **Address Space:** 8 bits.
* **Tag:** 3 bits (extracted from the first 3 bits of the binary address).
* **Index:** 2 bits (supporting a total of 4 cache blocks).
* **Offset:** 3 bits (representing the byte offset within the block).

## Technologies Used

* **Frontend:** HTML5 and CSS3.
* **Styling:** Features a clean, developer-friendly interface using the 'JetBrains Mono' font.
* **Logic:** Vanilla JavaScript handles all memory slicing and simulation logic.
* **Local Development:** Pre-configured to run locally using Five Server on port 8080.

## Future Extensions
- Making the UI better
- Making it more interactive and accurate
- Creating a backend(With C or C++)
