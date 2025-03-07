using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cms_api.Models
{
    public class Wallet
    {
        [Key]
        public int WalletId { get; set; }

        [ForeignKey("Customer")]
        public int CustId { get; set; }

        [Required]
        [StringLength(30)]
        public string WalletType { get; set; }

        [Required]
        [Column(TypeName = "numeric(9,2)")]
        public decimal WalletAmount { get; set; }
    }
}
