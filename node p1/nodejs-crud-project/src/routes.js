// server.js continued...

// Fetch item for updating
app.get('/edit/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('edit', { item });
  });
  
  // Update item
  app.post('/updateItem', async (req, res) => {
    const { itemId, updatedItemName } = req.body;
    await Item.findByIdAndUpdate(itemId, { name: updatedItemName });
    res.redirect('/');
  });
  