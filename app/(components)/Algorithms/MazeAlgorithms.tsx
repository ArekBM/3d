import { useEffect, useRef } from 'react';

interface Node {
    status: string
    weight: number
}

type Grid = Node[][]
type NodeList = Node[]

export function randomMaze(grid: Grid, nodesToAnimate: NodeList, type: 'wall' | 'weight') {
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            let random = Math.random()
            let currentNode = grid[i][j]
            let reservedStatus = ['start', 'finish']
            let randomTwo = type === 'wall' ? 0.25 : 0.35
            if (random < randomTwo && !reservedStatus.includes(currentNode.status)){
                nodesToAnimate.push(currentNode)
                if (type === 'wall') {
                    currentNode.weight = 0
                } else if ( type === 'weight'){
                    currentNode.weight = 15
                }

            }
        }
    }
}