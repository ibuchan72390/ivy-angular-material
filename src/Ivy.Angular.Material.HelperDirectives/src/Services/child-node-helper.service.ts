import { Injectable } from '@angular/core';

@Injectable()
export class ChildNodeHelperService {

    findChildNodeByClass(node: any, targetClass: string): any {

        for (var i = 0; i < node.children.length; i++) {

            let currentNode = node.children[i];

            if (!currentNode.classList) continue;

            if (currentNode.classList.contains(targetClass) > -1) {
                return currentNode;
            }
        }

        throw 'Unable to find child node of class! - Target Class: ' + targetClass;
    }
}