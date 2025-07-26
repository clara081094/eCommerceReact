import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button
} from '@mui/material';

function ItemList({ items, onItemClick }) {
  return (
    <TableContainer sx={{ pt: { xs: 15, md: 20 }, width: '100vw', margin: '0 auto' }}>
      <Table sx={{ minWidth: 500, width: '100%' }}>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Box
                  component="img"
                  src={item.p_image}
                  alt={item.p_name}
                  sx={{
                    width: '150px',
                    height: 'auto',
                    borderRadius: 1,
                  }}
                />
              </TableCell>
              <TableCell sx={{ minWidth: 150 }}>{item.p_name}</TableCell>
              <TableCell sx={{ minWidth: 250 }}>{item.p_description}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => onItemClick(item.id)}
                >
                  Ver más
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemList;
