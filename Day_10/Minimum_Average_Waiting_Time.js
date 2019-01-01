class MinHeap {
  constructor() {
    this.elements = [];
    this.size = 0;
  }

  set size(value) {
    this._size = value;
  }

  get size() {
    return this._size;
  }

  set elements(value) {
    this._elements = value;
  }

  get elements() {
    return this._elements;
  }

  _swap(p, c) {
    let t = this.elements[p];
    this.elements[p] = this.elements[c];
    this.elements[c] = t;
  }

  heapifyUp(walk) {
    while (walk != 1) {
      let p = Math.floor(walk/2);
      if (this.elements[walk].v < this.elements[p].v) {
        this._swap(p, walk);
        walk = p;
      } else {
        break;
      }
    }
  }

  heapifyDown(walk) {
    while (walk * 2 <= this.size) {
      let l = Math.floor(walk*2);
      let r = l + 1;
      let re = this.elements[r];
      if ((walk * 2 + 1) > this.size) {
          re = { v: this.elements[walk].v + 1 };
      }
      if (this.elements[walk].v < this.elements[l].v && this.elements[walk].v < re.v) {
        break;
      } else if (r <= this.size && re.v < this.elements[l].v) {
        this._swap(walk, r);
        walk = r;
      } else {
        this._swap(walk, l);
        walk = l;
      }
    }
  }

  insert(item) {
    this.size += 1;
    this.elements[this.size] = item;
    this.heapifyUp(this.size);
  }

  delete() {
    if (this.size == 0) {
      return null;
    }
    let root = this.elements[1];
    this.elements[1] = this.elements[this.size];
    delete this.elements[this.size];
    this.size -= 1;
    this.heapifyDown(1);
    return root;
  }
}

function extractCustomers(customers, timePassed) {
    return customers.filter(customer => customer[0] <= timePassed);
}

function dropCustomers(customers, timePassed) {
    return customers.filter(customer => customer[0] > timePassed);
}

function minimumAverage(customers) {
    let heap = new MinHeap();
    let ct = 0;
    let tw = 0;
    let cn = customers.length;
    customers.sort((a, b) => a[0] - b[0]);
    while (heap.size !== 0 || customers.length > 0) {
        let customersWaited = extractCustomers(customers, ct);
        customers = dropCustomers(customers, ct);
        customersWaited.forEach(c => {
            let item = { t: c[0], v: c[1] };
            heap.insert(item);
        });
        if (heap.size !== 0) {
            let item = heap.delete();
            tw += ((ct - item.t) + item.v);
            ct += item.v;
        } else {
            ct = customers[0][0];
        }        
    }
    return Math.floor(tw / cn);
}
