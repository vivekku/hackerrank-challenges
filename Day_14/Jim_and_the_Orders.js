function jimOrders(orders) {
	return orders.map((x, idx) => [idx + 1, x[0] + x[1]]).sort((x, y) => x[1] - y[1]).map(x => x[0]);
}